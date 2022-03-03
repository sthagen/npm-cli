# Changelog

## 1.0.0 (2022-03-03)


### ⚠ BREAKING CHANGES

* **libnpmdiff:** the log option is no longer passed to the updated deps

### Bug Fixes

* added arborist action and updated template-oss ([#4215](https://www.github.com/sthagen/npm-cli/issues/4215)) ([aa538df](https://www.github.com/sthagen/npm-cli/commit/aa538df4c19f46d2e24e2635d1214176c662fcea))
* set proper workspace repo urls in package.json ([#4476](https://www.github.com/sthagen/npm-cli/issues/4476)) ([0cfc155](https://www.github.com/sthagen/npm-cli/commit/0cfc155db5f11ce23419e440111d99a63bf39754))


### Dependencies

* libnpmdiff@4.0.0 ([9633752](https://www.github.com/sthagen/npm-cli/commit/9633752cd5c4a0d240adcb24f0ae7e3fafd122ba))
* **libnpmdiff:** update to latest major versions of npm deps ([b6401fd](https://www.github.com/sthagen/npm-cli/commit/b6401fd1b793be08c4af280111fe9fb53b7b3dd2))

## 2.0.3

- fix name of options sent by the npm cli

## 2.0.2

- fix matching basename file filter

## 2.0.1

- fix for tarballs not listing folder names

## 2.0.0

- API rewrite:
  - normalized all options
  - specs to compare are now an array
- fix context=0
- added support to filtering by folder names

## 1.0.1

- fixed nameOnly option

## 1.0.0

- Initial release
