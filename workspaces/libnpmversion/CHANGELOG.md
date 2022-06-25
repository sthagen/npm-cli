# Changelog

## [4.0.0](https://github.com/sthagen/npm-cli/compare/libnpmversion-v3.0.6...libnpmversion-v4.0.0) (2022-06-25)


### ⚠ BREAKING CHANGES

* **libnpmversion:** this removes the log option
* **libnpmversion:** the log option is no longer passed to the updated deps

### Features

* **libnpmversion:** rm log opt and add silent opt to control run script ([174dd88](https://github.com/sthagen/npm-cli/commit/174dd88cba31b25461619fe796fe1d3ac34eae70))


### Bug Fixes

* ignore integrity values for git dependencies ([#4468](https://github.com/sthagen/npm-cli/issues/4468)) ([c608512](https://github.com/sthagen/npm-cli/commit/c608512ed03ccf87dc989cec2849d14bf034513a))
* set proper workspace repo urls in package.json ([#4476](https://github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))
* update readme badges ([#4658](https://github.com/sthagen/npm-cli/issues/4658)) ([2829cb2](https://github.com/sthagen/npm-cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/run-script@4.1.0 ([2c06cee](https://github.com/sthagen/npm-cli/commit/2c06ceee82dd813c0ae84cc0b09e6941cfc5533e))
* @npmcli/run-script@4.1.3 ([#5064](https://github.com/sthagen/npm-cli/issues/5064)) ([f59a114](https://github.com/sthagen/npm-cli/commit/f59a114ffe3d1f86ccb2e52a4432292ab76852cc))
* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/sthagen/npm-cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/sthagen/npm-cli/issues/4639)) ([a59fd2c](https://github.com/sthagen/npm-cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))
* libnpmversion@3.0.0 ([2646d19](https://github.com/sthagen/npm-cli/commit/2646d199f26f77c4197ec0bcf30c3e452844c1ab))
* libnpmversion@3.0.2 ([ecd22b0](https://github.com/sthagen/npm-cli/commit/ecd22b07af515d86b77248e6a4cc2dec57bafd50))
* libnpmversion@3.0.3 ([970244c](https://github.com/sthagen/npm-cli/commit/970244c415da91b98ca3b200d88c1206ba81d774))
* libnpmversion@3.0.4 ([8a633a4](https://github.com/sthagen/npm-cli/commit/8a633a436cf37dad293af3aaf8ea9a0b5badf314))
* libnpmversion@3.0.5 ([a5be4d6](https://github.com/sthagen/npm-cli/commit/a5be4d612ff1ce2b31e2246cf17308652e804ce1))
* libnpmversion@3.0.6 ([8212363](https://github.com/sthagen/npm-cli/commit/8212363280f02c10f38e22c2dcd7e2abdf8bec35))
* **libnpmversion:** update to latest major versions of npm deps ([cfabd66](https://github.com/sthagen/npm-cli/commit/cfabd66d31c51c159b287ae1b3470beef690fe3d))
* remove stringify-package ([#4714](https://github.com/sthagen/npm-cli/issues/4714)) ([e33aa0f](https://github.com/sthagen/npm-cli/commit/e33aa0f94f87ae4f9d2a73781e84832ef61d1855))
* semver@7.3.7 ([c51e553](https://github.com/sthagen/npm-cli/commit/c51e553a32315e4f1b703ca9030eb7ade91d1a85))

## [3.0.6](https://github.com/npm/cli/compare/libnpmversion-v3.0.5...libnpmversion-v3.0.6) (2022-06-23)


### Dependencies

* @npmcli/run-script@4.1.3 ([#5064](https://github.com/npm/cli/issues/5064)) ([f59a114](https://github.com/npm/cli/commit/f59a114ffe3d1f86ccb2e52a4432292ab76852cc))

## [3.0.5](https://github.com/npm/cli/compare/libnpmversion-v3.0.4...libnpmversion-v3.0.5) (2022-06-22)


### Dependencies

* @npmcli/run-script@4.1.0 ([2c06cee](https://github.com/npm/cli/commit/2c06ceee82dd813c0ae84cc0b09e6941cfc5533e))

### [3.0.4](https://github.com/npm/cli/compare/libnpmversion-v3.0.3...libnpmversion-v3.0.4) (2022-04-26)


### Dependencies

* semver@7.3.7 ([c51e553](https://github.com/npm/cli/commit/c51e553a32315e4f1b703ca9030eb7ade91d1a85))

### [3.0.3](https://github.com/npm/cli/compare/libnpmversion-v3.0.2...libnpmversion-v3.0.3) (2022-04-12)


### Dependencies

* remove stringify-package ([#4714](https://github.com/npm/cli/issues/4714)) ([e33aa0f](https://github.com/npm/cli/commit/e33aa0f94f87ae4f9d2a73781e84832ef61d1855))

### [3.0.2](https://github.com/npm/cli/compare/libnpmversion-v3.0.1...libnpmversion-v3.0.2) (2022-04-06)


### Bug Fixes

* update readme badges ([#4658](https://github.com/npm/cli/issues/4658)) ([2829cb2](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/npm/cli/issues/4639)) ([a59fd2c](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))

### [3.0.1](https://www.github.com/npm/cli/compare/libnpmversion-vlibnpmversion@3.0.0...libnpmversion-v3.0.1) (2022-03-03)


### Bug Fixes

* set proper workspace repo urls in package.json ([#4476](https://www.github.com/npm/cli/issues/4476)) ([0cfc155](https://www.github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))
