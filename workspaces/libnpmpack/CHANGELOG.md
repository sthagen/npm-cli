# Changelog

## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmpack:** this drops support for the `log` property and the banner is shown using the silent option
* **libnpmpack:** the log option is no longer passed to the updated deps

### Features

* **libnpmpack:** use silent boolean instead of log.level ([64d451c](https://www.github.com/sthagen/npm-cli/commit/64d451c80d3385aba0f0a89736368318f2389500))
* **libnpmpack:** write tarball file when dryRun === false ([4884821](https://www.github.com/sthagen/npm-cli/commit/4884821f637ca1992b494fbdbd94d000e4428a40))


### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* ignore integrity values for git dependencies ([#4468](https://www.github.com/sthagen/npm-cli/issues/4468)) ([c608512](https://www.github.com/sthagen/npm-cli/commit/c608512ed03ccf87dc989cec2849d14bf034513a))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


### Dependencies

* libnpmpack@3.1.0 ([d3a7c15](https://www.github.com/sthagen/npm-cli/commit/d3a7c15e1e3d305a0bf781493406dfb1fdbaca35))
* libnpmpack@4.0.0 ([8b1d963](https://www.github.com/sthagen/npm-cli/commit/8b1d9636ad2374254263d154f2b4ca8ea6416f4c))
* **libnpmpack:** update to latest major versions of npm deps ([780609b](https://www.github.com/sthagen/npm-cli/commit/780609b0be8cc7b06e2c36dd0707a6e5a154d976))
