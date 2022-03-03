# Change Log

<a name="6.0.0"></a>
# [6.0.0](https://github.com/npm/libnpmhook/compare/v5.0.2...v6.0.0) (2020-02-26)

### Breaking Changes

* [`aa629b4`](https://github.com/npm/libnpmhook/commit/aa629b4) fix: remove figgy-pudding ([@claudiahdz](https://github.com/claudiahdz))

### Miscellaneuous

* [`ea795fb`](https://github.com/npm/libnpmhook/commit/ea795fb) chore: basic project updates ([@claudiahdz](https://github.com/claudiahdz))
* [`a0fdf7e`](https://github.com/npm/libnpmhook/commit/a0fdf7e) chore: cleanup badges, contrib, readme ([@ruyadorno](https://github.com/ruyadorno))

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.0.2"></a>
## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmhook:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


### Dependencies

* libnpmhook@8.0.0 ([1dab298](https://www.github.com/sthagen/npm-cli/commit/1dab29805c820f82e4bae18123e911fec6948dfd))
* **libnpmhook:** update to latest major versions of npm deps ([78f4a01](https://www.github.com/sthagen/npm-cli/commit/78f4a013c6e577714bda6851fb69a39c873571af))
* npm-registry-fetch@12.0.1 ([1bfc507](https://www.github.com/sthagen/npm-cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac))

## [5.0.2](https://github.com/npm/libnpmhook/compare/v5.0.1...v5.0.2) (2018-08-24)



<a name="5.0.1"></a>
## [5.0.1](https://github.com/npm/libnpmhook/compare/v5.0.0...v5.0.1) (2018-08-23)


### Bug Fixes

* **deps:** move JSONStream to prod deps ([bb63594](https://github.com/npm/libnpmhook/commit/bb63594))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/npm/libnpmhook/compare/v4.0.1...v5.0.0) (2018-08-21)


### Features

* **api:** overhauled API ([46b271b](https://github.com/npm/libnpmhook/commit/46b271b))


### BREAKING CHANGES

* **api:** the API for ls() has changed, and rm() no longer errors on 404



<a name="4.0.1"></a>
## [4.0.1](https://github.com/npm/libnpmhook/compare/v4.0.0...v4.0.1) (2018-04-09)



<a name="4.0.0"></a>
# [4.0.0](https://github.com/npm/libnpmhook/compare/v3.0.1...v4.0.0) (2018-04-08)


### meta

* drop support for node 4 and 7 ([f2a301e](https://github.com/npm/libnpmhook/commit/f2a301e))


### BREAKING CHANGES

* node@4 and node@7 are no longer supported



<a name="3.0.1"></a>
## [3.0.1](https://github.com/npm/libnpmhook/compare/v3.0.0...v3.0.1) (2018-04-08)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/npm/libnpmhook/compare/v2.0.1...v3.0.0) (2018-04-04)


### add

* guess type based on name ([9418224](https://github.com/npm/libnpmhook/commit/9418224))


### BREAKING CHANGES

* hook type is now based on name prefix



<a name="2.0.1"></a>
## [2.0.1](https://github.com/npm/libnpmhook/compare/v2.0.0...v2.0.1) (2018-03-16)


### Bug Fixes

* **urls:** was hitting the wrong URL endpoints ([10171a9](https://github.com/npm/libnpmhook/commit/10171a9))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/npm/libnpmhook/compare/v1.0.0...v2.0.0) (2018-03-16)



<a name="1.0.0"></a>
# 1.0.0 (2018-03-16)


### Features

* **api:** baseline working api ([122658e](https://github.com/npm/npm-hooks/commit/122658e))
