# Changelog

## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmexec:** this drops support for the `log` property
* **libnpmexec:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* ignore integrity values for git dependencies ([#4468](https://www.github.com/sthagen/npm-cli/issues/4468)) ([c608512](https://www.github.com/sthagen/npm-cli/commit/c608512ed03ccf87dc989cec2849d14bf034513a))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


* **libnpmexec:** remove log option ([55e9ef0](https://www.github.com/sthagen/npm-cli/commit/55e9ef01f1ee6a71489b32b31d17d2cbdc2d1a64))


### Dependencies

* @npmcli/arborist@5.0.0 ([d58e444](https://www.github.com/sthagen/npm-cli/commit/d58e4442b0a16c84219d5f80ab88ef68ad209918))
* @npmcli/ci-detect@2.0.0 ([#4403](https://www.github.com/sthagen/npm-cli/issues/4403)) ([fb13bda](https://www.github.com/sthagen/npm-cli/commit/fb13bdaf12dde3ef5685a77354e51a9cfa579879))
* bin-links@3.0.0 write-file-atomic@4.0.0 ([#4254](https://www.github.com/sthagen/npm-cli/issues/4254)) ([2ef9f98](https://www.github.com/sthagen/npm-cli/commit/2ef9f9847c11fe8c0c0494558fe77c15ac4dbc80))
* libnpmexec@4.0.0 ([9387505](https://www.github.com/sthagen/npm-cli/commit/9387505819f0e7e4b3d76dd3e2bd8636a1bb6306))
* **libnpmexec:** update to latest major versions of npm deps ([fde2f85](https://www.github.com/sthagen/npm-cli/commit/fde2f85cea28b0a6b56f90eeaa3144b4d05c7f75))

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
