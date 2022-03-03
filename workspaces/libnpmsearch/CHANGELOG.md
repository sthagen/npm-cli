# Change Log

<a name="3.0.0"></a>
# [3.0.0](https://github.com/npm/libnpmhook/compare/v2.0.2...v3.0.0) (2020-02-26)

### Breaking Changes

* [`45f4db1`](https://github.com/npm/libnpmsearch/commit/45f4db1) fix: remove figgy-pudding ([@claudiahdz](https://github.com/claudiahdz))

### Miscellaneuous

* [`b413aae`](https://github.com/npm/libnpmsearch/commit/b413aae) chore: basic project updates ([@claudiahdz](https://github.com/claudiahdz))
* [`534983c`](https://github.com/npm/libnpmsearch/commit/534983c) chore: remove pr temmsearch ([@ruyadorno](https://github.com/ruyadorno))
* [`c503a89`](https://github.com/npm/libnpmsearch/commit/c503a89) chore: cleanup badges + contributing ([@ruyadorno](https://github.com/ruyadorno))

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.2"></a>
## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmsearch:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


### Dependencies

* libnpmsearch@5.0.0 ([8b26a6d](https://www.github.com/sthagen/npm-cli/commit/8b26a6db13c37a6f0df86c54ca859ad2f9627825))
* **libnpmsearch:** update to latest major versions of npm deps ([1c09034](https://www.github.com/sthagen/npm-cli/commit/1c09034d41db3a7dc622a2ec56e303aa63980d7b))
* npm-registry-fetch@12.0.1 ([1bfc507](https://www.github.com/sthagen/npm-cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac))

## [2.0.2](https://github.com/npm/libnpmsearch/compare/v2.0.1...v2.0.2) (2019-07-16)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/npm/libnpmsearch/compare/v2.0.0...v2.0.1) (2019-06-10)


### Bug Fixes

* **opts:** support `opts.from` properly ([#2](https://github.com/npm/libnpmsearch/issues/2)) ([da6636c](https://github.com/npm/libnpmsearch/commit/da6636c))
* **standard:** standard --fix ([beca19c](https://github.com/npm/libnpmsearch/commit/beca19c))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/npm/libnpmsearch/compare/v1.0.0...v2.0.0) (2018-08-28)


### Features

* **opts:** added options for pagination, details, and sorting weights ([ff97eb5](https://github.com/npm/libnpmsearch/commit/ff97eb5))


### BREAKING CHANGES

* **opts:** this changes default requests and makes libnpmsearch return more complete data for individual packages, without null-defaulting



<a name="1.0.0"></a>
# 1.0.0 (2018-08-27)


### Features

* **api:** got API working ([fe90008](https://github.com/npm/libnpmsearch/commit/fe90008))
