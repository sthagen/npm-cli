# Changelog

## [5.0.0](https://github.com/sthagen/npm-cli/compare/libnpmteam-v4.0.3...libnpmteam-v5.0.0) (2022-05-14)


### ⚠ BREAKING CHANGES

* **libnpmteam:** the log option is no longer passed to the updated deps

### Bug Fixes

* **logout:** require proper auth.js from npm-registry-fetch ([90c384c](https://github.com/sthagen/npm-cli/commit/90c384ccccac32c80c481a04c438cbcbea82539c))
* set proper workspace repo urls in package.json ([#4476](https://github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))
* update readme badges ([#4658](https://github.com/sthagen/npm-cli/issues/4658)) ([2829cb2](https://github.com/sthagen/npm-cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Documentation

* standardize changelog heading ([#4510](https://github.com/sthagen/npm-cli/issues/4510)) ([91f03ee](https://github.com/sthagen/npm-cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/sthagen/npm-cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/sthagen/npm-cli/issues/4639)) ([a59fd2c](https://github.com/sthagen/npm-cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))
* libnpmteam@4.0.0 ([0b2fa7f](https://github.com/sthagen/npm-cli/commit/0b2fa7feda4643fe16c9a492497908f94d310dbd))
* libnpmteam@4.0.3 ([35e5100](https://github.com/sthagen/npm-cli/commit/35e5100e287925d19df4aab98de96cf70a6ff5a6))
* **libnpmteam:** update to latest major versions of npm deps ([c5a801d](https://github.com/sthagen/npm-cli/commit/c5a801d0f46e474133b3ebdf2bf42be29ffce494))
* npm-registry-fetch@12.0.1 ([1bfc507](https://github.com/sthagen/npm-cli/commit/1bfc507f2a5afa02f04d4dea2fc6d151d4fef3ac))

### [4.0.3](https://github.com/npm/cli/compare/libnpmteam-v4.0.2...libnpmteam-v4.0.3) (2022-04-06)


### Bug Fixes

* update readme badges ([#4658](https://github.com/npm/cli/issues/4658)) ([2829cb2](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/npm/cli/issues/4639)) ([a59fd2c](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))

### [4.0.2](https://www.github.com/npm/cli/compare/libnpmteam-v4.0.1...libnpmteam-v4.0.2) (2022-03-10)


### Documentation

* standardize changelog heading ([#4510](https://www.github.com/npm/cli/issues/4510)) ([91f03ee](https://www.github.com/npm/cli/commit/91f03ee618bc635f9cfbded735fe98bbfa9d643f))

### [4.0.1](https://www.github.com/npm/cli/compare/libnpmteam-vlibnpmteam@4.0.0...libnpmteam-v4.0.1) (2022-03-03)


### Bug Fixes

* set proper workspace repo urls in package.json ([#4476](https://www.github.com/npm/cli/issues/4476)) ([0cfc155](https://www.github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))

## [2.0.0](https://github.com/npm/libnpmteam/compare/v1.0.2...v2.0.0) (2020-03-02)

### BREAKING CHANGE
- Removed `figgy-pudding` as a dependecy
- Using native promises
- Require node >= v10

### Feature
- Updated stream interface to `minipass` type stream

---

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.2"></a>
## [1.0.2](https://github.com/npm/libnpmteam/compare/v1.0.1...v1.0.2) (2019-07-16)


### Bug Fixes

* **standard:** standard --fix ([3dc9144](https://github.com/npm/libnpmteam/commit/3dc9144))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/npm/libnpmteam/compare/v1.0.0...v1.0.1) (2018-08-24)



<a name="1.0.0"></a>
# 1.0.0 (2018-08-22)


### Features

* **api:** implement team api ([50dd0e1](https://github.com/npm/libnpmteam/commit/50dd0e1))
* **docs:** add fully-documented readme ([b1370f3](https://github.com/npm/libnpmteam/commit/b1370f3))
* **test:** test --100 ftw ([9d3bdc3](https://github.com/npm/libnpmteam/commit/9d3bdc3))
