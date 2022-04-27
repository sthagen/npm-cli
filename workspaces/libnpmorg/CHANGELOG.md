# Changelog

## [5.0.0](https://github.com/sthagen/npm-cli/compare/libnpmorg-v4.0.3...libnpmorg-v5.0.0) (2022-04-27)


### ⚠ BREAKING CHANGES

* **libnpmorg:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* **logout:** require proper auth.js from npm-registry-fetch ([90c384c](https://github.com/sthagen/npm-cli/commit/90c384ccccac32c80c481a04c438cbcbea82539c))
* set proper workspace repo urls in package.json ([#4476](https://github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))
* update readme badges ([#4658](https://github.com/sthagen/npm-cli/issues/4658)) ([2829cb2](https://github.com/sthagen/npm-cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Documentation

* standardize changelog heading ([#4510](https://github.com/sthagen/npm-cli/issues/4510)) ([91f03ee](https://github.com/sthagen/npm-cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/sthagen/npm-cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/sthagen/npm-cli/issues/4639)) ([a59fd2c](https://github.com/sthagen/npm-cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))
* libnpmorg@4.0.0 ([cf273f1](https://github.com/sthagen/npm-cli/commit/cf273f1cf31775c8a73cc67b654faf87b44f7f79))
* libnpmorg@4.0.3 ([dda8a97](https://github.com/sthagen/npm-cli/commit/dda8a976a9dd696cf2b2e2be5b55b2048e768768))
* **libnpmorg:** update to latest major versions of npm deps ([73a42ba](https://github.com/sthagen/npm-cli/commit/73a42ba177cf6de98c60ab3efe777ee402700db2))
* npm-registry-fetch@12.0.1 ([1bfc507](https://github.com/sthagen/npm-cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac))

### [4.0.3](https://github.com/npm/cli/compare/libnpmorg-v4.0.2...libnpmorg-v4.0.3) (2022-04-06)


### Bug Fixes

* update readme badges ([#4658](https://github.com/npm/cli/issues/4658)) ([2829cb2](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/npm/cli/issues/4639)) ([a59fd2c](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))

### [4.0.2](https://www.github.com/npm/cli/compare/libnpmorg-v4.0.1...libnpmorg-v4.0.2) (2022-03-10)


### Documentation

* standardize changelog heading ([#4510](https://www.github.com/npm/cli/issues/4510)) ([91f03ee](https://www.github.com/npm/cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f))

### [4.0.1](https://www.github.com/npm/cli/compare/libnpmorg-vlibnpmorg@4.0.0...libnpmorg-v4.0.1) (2022-03-03)


### Bug Fixes

* set proper workspace repo urls in package.json ([#4476](https://www.github.com/npm/cli/issues/4476)) ([0cfc155](https://www.github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))

## 2.0.0 (2020-03-02)

### BREAKING CHANGE
- Removed `figgy-pudding` as a dependecy
- Using native promises
- Require node >= v10

### Feature
- Updated stream interface to `minipass` type stream

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/npm/libnpmorg/compare/v1.0.0...v1.0.1) (2019-07-16)


### Bug Fixes

* **standard:** standard --fix ([5118358](https://github.com/npm/libnpmorg/commit/5118358))



<a name="1.0.0"></a>
# 1.0.0 (2018-08-23)


### Features

* **API:** implement org api ([731b9c6](https://github.com/npm/libnpmorg/commit/731b9c6))
