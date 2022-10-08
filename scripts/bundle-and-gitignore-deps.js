#!/usr/bin/env node

const Arborist = require('@npmcli/arborist')
const packlist = require('npm-packlist')
const git = require('@npmcli/git')
const { resolve, join, relative } = require('path')
const localeCompare = require('@isaacs/string-locale-compare')('en')
const fs = require('@npmcli/fs')
const PackageJson = require('@npmcli/package-json')

const RM_FLAG = '--remove-ignored-files'
const ALWAYS_IGNORE = `
.bin/
.cache/
package-lock.json
CHANGELOG*
changelog*
ChangeLog*
Changelog*
README*
readme*
ReadMe*
Readme*
__pycache__
.editorconfig
.idea/
.npmignore
.eslintrc*
.travis*
.github
.jscsrc
.nycrc
.istanbul*
.eslintignore
.jshintrc*
.prettierrc*
.jscs.json
.dir-locals*
.coveralls*
.babelrc*
.nyc_output
.gitkeep
`

const lsIgnored = async ({ cwd, dir }) => {
  const { stdout } = await git.spawn([
    'ls-files',
    '--cached',
    '--ignored',
    `--exclude-standard`,
    dir,
  ], { cwd })

  const files = stdout
    .trim()
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)

  if (process.argv.includes(RM_FLAG)) {
    for (const file of files) {
      await git.spawn(['rm', file], { cwd })
    }
    return []
  }

  return files
}

const getAllowedPaths = (files) => {
  // Get all files within node_modules and remove
  // the node_modules/ portion of the path for processing
  // since this list will go inside a gitignore at the
  // root of the node_modules dir
  const nmFiles = files
    .filter(f => f.startsWith('node_modules/'))
    .map(f => f.replace(/^node_modules\//, ''))
    .sort(localeCompare)

  class AllowSegments {
    #segments
    #usedSegments

    constructor (pathSegments, rootSegments = []) {
      // Copy strings with spread operator since we mutate these arrays
      this.#segments = [...pathSegments]
      this.#usedSegments = [...rootSegments]
    }

    get next () {
      return this.#segments[0]
    }

    get remaining () {
      return this.#segments
    }

    get used () {
      return this.#usedSegments
    }

    use () {
      const segment = this.#segments.shift()
      this.#usedSegments.push(segment)
      return segment
    }

    allowContents ({ use = true, isDirectory = true } = {}) {
      if (use) {
        this.use()
      }
      // Allow a previously ignored directy
      // Important: this should NOT have a trailing
      // slash if we are not sure it is a directory.
      // Since a dep can be a directory or a symlink and
      // a trailing slash in a .gitignore file
      // tells git to treat it only as a directory
      return [`!/${this.used.join('/')}${isDirectory ? '/' : ''}`]
    }

    allow ({ use = true } = {}) {
      if (use) {
        this.use()
      }
      // Allow a previously ignored directory but ignore everything inside
      return [
        ...this.allowContents({ use: false, isDirectory: true }),
        `/${this.used.join('/')}/*`,
      ]
    }
  }

  const gatherAllows = (pathParts, usedParts) => {
    const ignores = []
    const segments = new AllowSegments(pathParts, usedParts)

    if (segments.next) {
      // 1) Process scope segment of the path, if it has one
      if (segments.next.startsWith('@')) {
        // For scoped deps we need to allow the entire scope dir
        // due to how gitignore works. Without this the gitignore will
        // never look to allow our bundled dep since the scope dir was ignored.
        // It ends up looking like this for `@colors/colors`:
        //
        // # Allow @colors dir
        // !/@colors/
        // # Ignore everything inside. This is safe because there is
        // # nothing inside a scope except other packages
        // !/colors/*
        //
        // Then later we will allow the specific dep inside that scope.
        // This way if a scope includes bundled AND unbundled deps,
        // we only allow the bundled ones.
        ignores.push(...segments.allow())
      }

      // 2) Now we process the name segment of the path
      // and allow the dir and everything inside of it (like source code, etc)
      ignores.push(...segments.allowContents({ isDirectory: false }))

      // 3) If we still have remaining segments and the next segment
      // is a nested node_modules directory...
      if (segments.next && segments.use() === 'node_modules') {
        ignores.push(
          // Allow node_modules and ignore everything inside of it
          // Set false here since we already "used" the node_modules path segment
          ...segments.allow({ use: false }),
          // Repeat the process with the remaining path segments to include whatever is left
          ...gatherAllows(segments.remaining, segments.used)
        )
      }
    }

    return ignores
  }

  const allowPaths = new Set()
  for (const file of nmFiles) {
    for (const allow of gatherAllows(file.split('/'))) {
      allowPaths.add(allow)
    }
  }

  return [...allowPaths]
}

const setBundleDeps = async (dir) => {
  const pkg = await PackageJson.load(dir)

  pkg.update({
    bundleDependencies: Object.keys(pkg.content.dependencies).sort(localeCompare),
  })

  await pkg.save()

  return pkg.content.bundleDependencies
}

/*
This file sets what is checked in to node_modules. The root .gitignore file
includes node_modules and this file writes an ignore file to
node_modules/.gitignore. We ignore everything and then use a query to find all
the bundled deps and allow each one of those explicitly.

Since node_modules can be nested we have to process each portion of the path and
allow it while also ignoring everything inside of it, with the exception of a
deps source. We have to do this since everything is ignored by default, and git
will not allow a nested path if its parent has not also been allowed. BUT! We
also have to ignore other things in those directories.
*/
const main = async (path) => {
  await setBundleDeps(path)

  const nodeModules = resolve(path, 'node_modules')
  const gitIgnore = join(nodeModules, '.gitignore')

  const arb = new Arborist({ path })
  const files = await arb.loadActual().then(packlist)

  const ignoreFile = [
    '# Automatically generated to ignore everything except bundled deps',
    '# Ignore everything by default except this file',
    '/*',
    '!/.gitignore',
    '# Allow all bundled deps',
    ...getAllowedPaths(files),
    '# Always ignore some specific patterns within any allowed package',
    ...ALWAYS_IGNORE.trim().split('\n'),
  ]

  await fs.writeFile(gitIgnore, ignoreFile.join('\n') + '\n')

  // After we write the file we have to check if any of the paths already checked in
  // inside node_modules are now going to be ignored. If we find any then fail with
  // a list of paths that will need to have `git rm` run on them.
  const trackedAndIgnored = await lsIgnored({ cwd: path, dir: nodeModules })

  if (trackedAndIgnored.length) {
    const message = [
      'The following files are checked in to git but will now be ignored.',
      `Rerun this script with \`${RM_FLAG}\` to remove them.`,
      ...trackedAndIgnored.map(p => relative(nodeModules, p)),
    ].join('\n')
    throw new Error(message)
  }

  return `Wrote to ${relative(process.cwd(), gitIgnore)}`
}

main(resolve(__dirname, '..'))
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err)
    return process.exit(1)
  })
