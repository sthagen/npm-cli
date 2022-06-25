# Changelog

## [5.0.0](https://github.com/sthagen/npm-cli/compare/libnpmexec-v4.0.8...libnpmexec-v5.0.0) (2022-06-25)


### ⚠ BREAKING CHANGES

* **libnpmexec:** this drops support for the `log` property
* **libnpmexec:** the log option is no longer passed to the updated deps

### Bug Fixes

* **exec:** workspaces support ([6253d19](https://github.com/sthagen/npm-cli/commit/6253d1968d8390ea6b16604ff3abb5e6509349c9))
* ignore integrity values for git dependencies ([#4468](https://github.com/sthagen/npm-cli/issues/4468)) ([c608512](https://github.com/sthagen/npm-cli/commit/c608512ed03ccf87dc989cec2849d14bf034513a))
* **libnpmexec:** fix bug not install latest pkg ([#4929](https://github.com/sthagen/npm-cli/issues/4929)) ([fcc72dd](https://github.com/sthagen/npm-cli/commit/fcc72dd8791187f4b3d8705fb23c2744c83ef943))
* **libnpmexec:** fix read mixed local/registry pkg ([4a46a27](https://github.com/sthagen/npm-cli/commit/4a46a27f2b968e2f8c1f4821508f93013738c482))
* set proper workspace repo urls in package.json ([#4476](https://github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))
* update readme badges ([#4658](https://github.com/sthagen/npm-cli/issues/4658)) ([2829cb2](https://github.com/sthagen/npm-cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


* **libnpmexec:** remove log option ([55e9ef0](https://github.com/sthagen/npm-cli/commit/55e9ef01f1ee6a71489b32b31d17d2cbdc2d1a64))


### Dependencies

* @npmcli/arborist@5.0.0 ([d58e444](https://github.com/sthagen/npm-cli/commit/d58e4442b0a16c84219d5f80ab88ef68ad209918))
* @npmcli/run-script@4.1.0 ([2c06cee](https://github.com/sthagen/npm-cli/commit/2c06ceee82dd813c0ae84cc0b09e6941cfc5533e))
* @npmcli/run-script@4.1.3 ([#5064](https://github.com/sthagen/npm-cli/issues/5064)) ([f59a114](https://github.com/sthagen/npm-cli/commit/f59a114ffe3d1f86ccb2e52a4432292ab76852cc))
* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/sthagen/npm-cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/sthagen/npm-cli/issues/4639)) ([a59fd2c](https://github.com/sthagen/npm-cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))
* cacache@16.0.1 ([f95396a](https://github.com/sthagen/npm-cli/commit/f95396a033b75e2a3e9aa83f0b06c527641027a4))
* libnpmexec@4.0.0 ([9387505](https://github.com/sthagen/npm-cli/commit/9387505819f0e7e4b3d76dd3e2bd8636a1bb6306))
* libnpmexec@4.0.3 ([df92e23](https://github.com/sthagen/npm-cli/commit/df92e23af63ca07bb4c261abd7365530529d3fd2))
* libnpmexec@4.0.5 ([b1b6948](https://github.com/sthagen/npm-cli/commit/b1b69487637ce99192dc930257eebae9eed4fe7f))
* libnpmexec@4.0.6 ([0886f7f](https://github.com/sthagen/npm-cli/commit/0886f7fa5ac641137052782698407ada230c611c))
* libnpmexec@4.0.7 ([14a08d6](https://github.com/sthagen/npm-cli/commit/14a08d6ceb57130a2e4bdbad74ebf4944c92890e))
* libnpmexec@4.0.8 ([9f94049](https://github.com/sthagen/npm-cli/commit/9f94049f058687b916da726ea625b5fa68d0829d))
* **libnpmexec:** update to latest major versions of npm deps ([fde2f85](https://github.com/sthagen/npm-cli/commit/fde2f85cea28b0a6b56f90eeaa3144b4d05c7f75))
* npm-package-arg@9.0.1 ([9555a5f](https://github.com/sthagen/npm-cli/commit/9555a5f1d135aa1b8f7374273403efe41e99ee26))
* npmlog@6.0.2 ([5e31322](https://github.com/sthagen/npm-cli/commit/5e313223100db1207818d756b081eaba3468b273))
* pacote@13.0.4 ([6d31450](https://github.com/sthagen/npm-cli/commit/6d3145014861b4198c16d7772d809fd037ece289))
* pacote@13.0.5 ([340fa51](https://github.com/sthagen/npm-cli/commit/340fa51f423a518a96c8015a67d8f6144a2e8051))
* pacote@13.6.1 ([2e50cb8](https://github.com/sthagen/npm-cli/commit/2e50cb83e84cf25fee93ba0ca5a0343fbdb33c41))

## [4.0.8](https://github.com/npm/cli/compare/libnpmexec-v4.0.7...libnpmexec-v4.0.8) (2022-06-23)


### Dependencies

* @npmcli/run-script@4.1.3 ([#5064](https://github.com/npm/cli/issues/5064)) ([f59a114](https://github.com/npm/cli/commit/f59a114ffe3d1f86ccb2e52a4432292ab76852cc))

## [4.0.7](https://github.com/npm/cli/compare/libnpmexec-v4.0.6...libnpmexec-v4.0.7) (2022-06-22)


### Dependencies

* @npmcli/run-script@4.1.0 ([2c06cee](https://github.com/npm/cli/commit/2c06ceee82dd813c0ae84cc0b09e6941cfc5533e))
* pacote@13.6.1 ([2e50cb8](https://github.com/npm/cli/commit/2e50cb83e84cf25fee93ba0ca5a0343fbdb33c41))

### [4.0.6](https://github.com/npm/cli/compare/libnpmexec-v4.0.5...libnpmexec-v4.0.6) (2022-06-01)


### Bug Fixes

* **libnpmexec:** fix bug not install latest pkg ([#4929](https://github.com/npm/cli/issues/4929)) ([fcc72dd](https://github.com/npm/cli/commit/fcc72dd8791187f4b3d8705fb23c2744c83ef943))

### [4.0.5](https://github.com/npm/cli/compare/libnpmexec-v4.0.4...libnpmexec-v4.0.5) (2022-04-26)


### Dependencies

* npmlog@6.0.2 ([5e31322](https://github.com/npm/cli/commit/5e313223100db1207818d756b081eaba3468b273))

### [4.0.4](https://github.com/npm/cli/compare/libnpmexec-v4.0.3...libnpmexec-v4.0.4) (2022-04-19)


### Bug Fixes

* **exec:** workspaces support ([6253d19](https://github.com/npm/cli/commit/6253d1968d8390ea6b16604ff3abb5e6509349c9))
* **libnpmexec:** fix read mixed local/registry pkg ([4a46a27](https://github.com/npm/cli/commit/4a46a27f2b968e2f8c1f4821508f93013738c482))

### [4.0.3](https://github.com/npm/cli/compare/libnpmexec-v4.0.2...libnpmexec-v4.0.3) (2022-04-06)


### Bug Fixes

* update readme badges ([#4658](https://github.com/npm/cli/issues/4658)) ([2829cb2](https://github.com/npm/cli/commit/2829cb28a432b5ff7beeeb3bf3e7e2e174c1121d))


### Dependencies

* @npmcli/template-oss@3.2.1 ([aac01b8](https://github.com/npm/cli/commit/aac01b89caf6336a2eb34d696296303cdadd5c08))
* @npmcli/template-oss@3.2.2 ([#4639](https://github.com/npm/cli/issues/4639)) ([a59fd2c](https://github.com/npm/cli/commit/a59fd2cb863245fce56f96c90ac854e62c5c4d6f))

### [4.0.2](https://www.github.com/npm/cli/compare/libnpmexec-v4.0.1...libnpmexec-v4.0.2) (2022-03-15)


### Dependencies

* npm-package-arg@9.0.1 ([9555a5f](https://www.github.com/npm/cli/commit/9555a5f1d135aa1b8f7374273403efe41e99ee26))
* pacote@13.0.4 ([6d31450](https://www.github.com/npm/cli/commit/6d3145014861b4198c16d7772d809fd037ece289))
* pacote@13.0.5 ([340fa51](https://www.github.com/npm/cli/commit/340fa51f423a518a96c8015a67d8f6144a2e8051))

### [4.0.1](https://www.github.com/npm/cli/compare/libnpmexec-vlibnpmexec@4.0.0...libnpmexec-v4.0.1) (2022-03-03)


### Bug Fixes

* set proper workspace repo urls in package.json ([#4476](https://www.github.com/npm/cli/issues/4476)) ([0cfc155](https://www.github.com/npm/cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))

## v2.0.0

- Added a new required `npxCache` option

## v1.2.0

- Added a default value to `scriptShell` option

## v1.1.0

- Add add walk up dir lookup logic to satisfy local bins,
similar to `@npmcli/run-script`

## v1.0.1

- Fix `scriptShell` option name.

## v1.0.0

- Initial implementation, moves the code that used to live in the **npm cli**,
ref: https://github.com/npm/cli/blob/release/v7.10.0/lib/exec.js into this
separate module, providing a programmatic API to the **npm exec** functionality.
