# Change Log

<a name="3.0.1"></a>
# [3.0.1](https://github.com/npm/libnpmpublish/compare/v3.0.0...v3.0.1) (2020-03-27)

### Features

* [`3e02307`](https://github.com/npm/libnpmpublish/commit/3e02307) chore: pack tarballs using libnpmpack ([@claudiahdz](https://github.com/claudiahdz))

<a name="3.0.0"></a>
# [3.0.0](https://github.com/npm/libnpmpublish/compare/v2.0.0...v3.0.0) (2020-03-09)

### Breaking Changes

* [`ecaeb0b`](https://github.com/npm/libnpmpublish/commit/ecaeb0b) feat: pack tarballs from source code using pacote v10 ([@claudiahdz](https://github.com/claudiahdz))

* [`f6bf2b8`](https://github.com/npm/libnpmpublish/commit/f6bf2b8) feat: unpublish code refactor ([@claudiahdz](https://github.com/claudiahdz))

### Miscellaneuous

* [`5cea10f`](https://github.com/npm/libnpmpublish/commit/5cea10f) chore: basic project updates ([@claudiahdz](https://github.com/claudiahdz))
* [`3010b93`](https://github.com/npm/libnpmpublish/commit/3010b93) chore: cleanup badges + contributing ([@ruyadorno](https://github.com/ruyadorno))

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmpublish:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* **libnpmpublish:** remove superfluous argument ([#4463](https://www.github.com/sthagen/npm-cli/issues/4463)) ([d9b6378](https://www.github.com/sthagen/npm-cli/commit/d9b63784dbef50c5b3a7bd62ba5df1aaa45133fc))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


### Dependencies

* libnpmpack@4.0.0 ([8b1d963](https://www.github.com/sthagen/npm-cli/commit/8b1d9636ad2374254263d154f2b4ca8ea6416f4c))
* libnpmpublish@6.0.0 ([67aed05](https://www.github.com/sthagen/npm-cli/commit/67aed05429163fc120e05e6fb15f8f3cd9c6ef22))
* **libnpmpublish:** update to latest major versions of npm deps ([b8f0829](https://www.github.com/sthagen/npm-cli/commit/b8f082950667d7f6aee46f13a958c465dd9d68f6))
* npm-registry-fetch@12.0.1 ([1bfc507](https://www.github.com/sthagen/npm-cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac))

## [2.0.0](https://github.com/npm/libnpmpublish/compare/v1.1.3...v2.0.0) (2019-09-18)


### ⚠ BREAKING CHANGES

* This drops support for Node.js version 6.

### Bug Fixes

* audit warnings, drop support for Node.js v6 ([d9a1fb6](https://github.com/npm/libnpmpublish/commit/d9a1fb6))

### [1.1.3](https://github.com/npm/libnpmpublish/compare/v1.1.2...v1.1.3) (2019-09-18)

<a name="1.1.2"></a>
## [1.1.2](https://github.com/npm/libnpmpublish/compare/v1.1.1...v1.1.2) (2019-07-16)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/npm/libnpmpublish/compare/v1.1.0...v1.1.1) (2019-01-22)


### Bug Fixes

* **auth:** send username in correct key ([#3](https://github.com/npm/libnpmpublish/issues/3)) ([38422d0](https://github.com/npm/libnpmpublish/commit/38422d0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/npm/libnpmpublish/compare/v1.0.1...v1.1.0) (2018-08-31)


### Features

* **publish:** add support for publishConfig on manifests ([161723b](https://github.com/npm/libnpmpublish/commit/161723b))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/npm/libnpmpublish/compare/v1.0.0...v1.0.1) (2018-08-31)


### Bug Fixes

* **opts:** remove unused opts ([2837098](https://github.com/npm/libnpmpublish/commit/2837098))



<a name="1.0.0"></a>
# 1.0.0 (2018-08-31)


### Bug Fixes

* **api:** use opts.algorithms, return true on success ([80fe34b](https://github.com/npm/libnpmpublish/commit/80fe34b))
* **publish:** first test pass w/ bugfixes ([74135c9](https://github.com/npm/libnpmpublish/commit/74135c9))
* **publish:** full coverage test and related fixes ([b5a3446](https://github.com/npm/libnpmpublish/commit/b5a3446))


### Features

* **docs:** add README with api docs ([553c13d](https://github.com/npm/libnpmpublish/commit/553c13d))
* **publish:** add initial publish support. tests tbd ([5b3fe94](https://github.com/npm/libnpmpublish/commit/5b3fe94))
* **unpublish:** add new api with unpublish support ([1c9d594](https://github.com/npm/libnpmpublish/commit/1c9d594))
