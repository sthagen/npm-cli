const run = require('../lib/build.js')
const { paths } = require('../lib/index')

run(paths)
  .then((res) => console.log(`Wrote ${res.length} files`))
  .catch((err) => {
    process.exitCode = 1
    console.error(err)
  })
