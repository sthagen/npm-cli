# Changelog

## [9.5.0](https://github.com/npm/cli/compare/v9.4.2...v9.5.0) (2023-02-14)

### Features

* [`79bfd03`](https://github.com/npm/cli/commit/79bfd03947a25f4bfb67d1c54893be7c79ec77e2) [#6153](https://github.com/npm/cli/pull/6153) audit signatures verifies attestations (@feelepxyz)
* [`5fc6473`](https://github.com/npm/cli/commit/5fc647316cdc07d4337cdf1b75f73a0663822c7f) add provenance attestation (@bdehamer)

### Bug Fixes

* [`53f75a4`](https://github.com/npm/cli/commit/53f75a4faeac02b97cfac91309a7f9f4efe553a0) [#6158](https://github.com/npm/cli/pull/6158) gracefully fallback from auth-type=web (#6158) (@MylesBorins)
* [`ed59aae`](https://github.com/npm/cli/commit/ed59aae51cc55f57ee32d43e898ef05236005a09) [#6162](https://github.com/npm/cli/pull/6162) refactor error reporting in audit command (@bdehamer)

### Dependencies

* [`fad0473`](https://github.com/npm/cli/commit/fad04737d7b0d1e3a8cd3d3a651e90db6b185f7b) `minipass@4.0.3`
* [`678c6bf`](https://github.com/npm/cli/commit/678c6bf716012fd834c06644ed1a82e10a5393ad) `minimatch@6.2.0`
* [`9b4b366`](https://github.com/npm/cli/commit/9b4b366af5dac21b6db5d722d30b7e1fff064600) `ci-info@3.8.0`
* [`d20ee2a`](https://github.com/npm/cli/commit/d20ee2afa0b9c97ed6822cb8e6838ba537dd76a9) `pacote@15.1.0`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpublish-v7.1.0): `libnpmpublish@7.1.0`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmteam-v5.0.3): `libnpmteam@5.0.3`

## [9.4.2](https://github.com/npm/cli/compare/v9.4.1...v9.4.2) (2023-02-07)

### Bug Fixes

* [`d02da52`](https://github.com/npm/cli/commit/d02da52dc1ac6520223e9e7e8fdcbd9e27b5333f) [#6142](https://github.com/npm/cli/pull/6142) revert `install-links` default back to `false` (#6142) (@nlf)

### Documentation

* [`6ea2cd7`](https://github.com/npm/cli/commit/6ea2cd77c6ba92f213e4833c746f032ef9bfcc3d) [#6134](https://github.com/npm/cli/pull/6134) update references to OTP to be accurate (#6134) (@MylesBorins)

### Dependencies

* [`cb6713d`](https://github.com/npm/cli/commit/cb6713dc8ef7161c8162cc418a023d25b17e5bcf) [#6143](https://github.com/npm/cli/pull/6143) rebuild package-lock (#6143)
* [`8200f4f`](https://github.com/npm/cli/commit/8200f4f16d9dad1d44094c8c2182e26bc1a8b732) [#6133](https://github.com/npm/cli/pull/6133) `ignore-walk@6.0.1`
* [`d43f881`](https://github.com/npm/cli/commit/d43f8812af5900cce45364729871a745b379aea9) `map-workspaces@3.0.2`
* [`99457f1`](https://github.com/npm/cli/commit/99457f1f48d57f913b398e25f4e5da066af71204) `minimatch@6.1.6`
* [`f4c8c62`](https://github.com/npm/cli/commit/f4c8c62baf532b7599e3760f959788bbda97ba0b) `init-package-json@5.0.0`
* [`3c6615f`](https://github.com/npm/cli/commit/3c6615fff53a3368679f28b8812eba86dbc195a9) `npm-user-validate@2.0.0`
* [`10445ca`](https://github.com/npm/cli/commit/10445ca4a09df590777a9289ab1ed0f41449c85d) remove mkdirp
* [`ab82492`](https://github.com/npm/cli/commit/ab824922ea7678585926adb67a90cdcebc53b4ae) `node-gyp@9.3.1`
* [`74c5cbb`](https://github.com/npm/cli/commit/74c5cbbd774f7ff7c1f037b382aec36cbc8ca2f1) `minipass@4.0.2`
* [`1138038`](https://github.com/npm/cli/commit/11380386cef7ad8b12226431ca3d5e166455d626) `make-fetch-happen@11.0.3`
* [`c1ccfa1`](https://github.com/npm/cli/commit/c1ccfa146523d734bdfe2a7bef1b0abc64e716d8) `glob@8.1.0`
* [`3dc17ce`](https://github.com/npm/cli/commit/3dc17ce3fa570f9ef2c55e2a565af6fe89b3e73d) `fs-minipass@3.0.1`
* [`5c84a99`](https://github.com/npm/cli/commit/5c84a99f5a141a632bd644ca97505010c2842eb2) `ci-info@3.7.1`
* [`fc5332f`](https://github.com/npm/cli/commit/fc5332f4027f3019a855f12a66e29bca1b143364) `read@2.0.0`
* [Workspace](https://github.com/npm/cli/releases/tag/arborist-v6.2.2): `@npmcli/arborist@6.2.2`
* [Workspace](https://github.com/npm/cli/releases/tag/config-v6.1.3): `@npmcli/config@6.1.3`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmdiff-v5.0.10): `libnpmdiff@5.0.10`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmexec-v5.0.10): `libnpmexec@5.0.10`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmfund-v4.0.10): `libnpmfund@4.0.10`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmhook-v9.0.3): `libnpmhook@9.0.3`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmorg-v5.0.3): `libnpmorg@5.0.3`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpack-v5.0.10): `libnpmpack@5.0.10`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpublish-v7.0.8): `libnpmpublish@7.0.8`

## [9.4.1](https://github.com/npm/cli/compare/v9.4.0...v9.4.1) (2023-02-01)

### Bug Fixes

* [`1525a5e`](https://github.com/npm/cli/commit/1525a5e7fba4c996ac3bed5fdb75da275c537da8) [#6082](https://github.com/npm/cli/pull/6082) unpublish with scoped registry (@wraithgar)

### Dependencies

* [`721fe3f`](https://github.com/npm/cli/commit/721fe3fac383d714aa7fd7285b4392619903b1e7) [#6118](https://github.com/npm/cli/pull/6118) `read-package-json-fast@3.0.2`
* [`6e4a649`](https://github.com/npm/cli/commit/6e4a64976dc9a359b97413cd725e93caa1f0fc28) `pacote@15.0.8`
* [`1820afe`](https://github.com/npm/cli/commit/1820afe4b34909b8702da69032dde9d3ecdbb447) `cacache@17.0.4`
* [`24b2ec4`](https://github.com/npm/cli/commit/24b2ec4e156f98ef80ed5ac8751d35a32ad1251a) `@npmcli/promise-spawn@6.0.2`
* [`4b8046e`](https://github.com/npm/cli/commit/4b8046e680d5907d2df71d6d3775b66e0bea7ed2) `@npmcli/name-from-folder@2.0.0`
* [`1d4be7a`](https://github.com/npm/cli/commit/1d4be7a5457fd0081696e29f8382645873cf13d9) `@npmcli/map-workspaces@3.0.1`
* [`a39556f`](https://github.com/npm/cli/commit/a39556f1cff4526dcbcb7b65cdd86a1ba092e13e) `@npmcli/template-oss@4.11.3`
* [`64b06ed`](https://github.com/npm/cli/commit/64b06ed21fc165e413b3e6f1ae5a236350e5bfaf) [#6115](https://github.com/npm/cli/pull/6115) `http-cache-semantics@4.1.1`
* [Workspace](https://github.com/npm/cli/releases/tag/arborist-v6.2.1): `@npmcli/arborist@6.2.1`
* [Workspace](https://github.com/npm/cli/releases/tag/config-v6.1.2): `@npmcli/config@6.1.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmaccess-v7.0.2): `libnpmaccess@7.0.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmdiff-v5.0.9): `libnpmdiff@5.0.9`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmexec-v5.0.9): `libnpmexec@5.0.9`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmfund-v4.0.9): `libnpmfund@4.0.9`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmhook-v9.0.2): `libnpmhook@9.0.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmorg-v5.0.2): `libnpmorg@5.0.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpack-v5.0.9): `libnpmpack@5.0.9`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpublish-v7.0.7): `libnpmpublish@7.0.7`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmsearch-v6.0.2): `libnpmsearch@6.0.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmteam-v5.0.2): `libnpmteam@5.0.2`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmversion-v4.0.2): `libnpmversion@4.0.2`

## [9.4.0](https://github.com/npm/cli/compare/v9.3.1...v9.4.0) (2023-01-25)

### Features

* [`8d6d851`](https://github.com/npm/cli/commit/8d6d8519fbbcebdca8834e19cb34ac71f045a010) [#6078](https://github.com/npm/cli/pull/6078) added --install-strategy=linked (#6078) (@fritzy)

### Dependencies

* [Workspace](https://github.com/npm/cli/releases/tag/arborist-v6.2.0): `@npmcli/arborist@6.2.0`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmdiff-v5.0.8): `libnpmdiff@5.0.8`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmexec-v5.0.8): `libnpmexec@5.0.8`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmfund-v4.0.8): `libnpmfund@4.0.8`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpack-v5.0.8): `libnpmpack@5.0.8`

## [9.3.1](https://github.com/npm/cli/compare/v9.3.0...v9.3.1) (2023-01-13)

### Bug Fixes

* [`8be672b`](https://github.com/npm/cli/commit/8be672b21f7d434c898bb4e97dc3fca6e54b29a1) [#6050](https://github.com/npm/cli/pull/6050) don't try to deprecate nonexistant versions (#6050) (@wraithgar)
* [`1c3612c`](https://github.com/npm/cli/commit/1c3612cc2fe9974166b5aab92477b289a768c1e7) [#6054](https://github.com/npm/cli/pull/6054) use recursive rm in ci command (#6054) (@jamesshaw1987, @burkel24)

## [9.3.0](https://github.com/npm/cli/compare/v9.2.0...v9.3.0) (2023-01-12)

### Features

* [`753b98e`](https://github.com/npm/cli/commit/753b98ef49e0410642cbfb1adbe06e7417e22d82) [#5261](https://github.com/npm/cli/pull/5261) rootless workspace init provides suggestion (@fritzy)

### Bug Fixes

* [`cf175fb`](https://github.com/npm/cli/commit/cf175fb2a7faffa6664874a9e8bea52dbbb1b0e2) [#6044](https://github.com/npm/cli/pull/6044) default auth-type to legacy if otp is configured (#6044) (@wraithgar)
* [`2383deb`](https://github.com/npm/cli/commit/2383deb9723593365cf748238f3b2388e7aaf6f5) [#6037](https://github.com/npm/cli/pull/6037) clean urls from arborist, owner, and ping commands (#6037) (@lukekarrys)
* [`69f5ff8`](https://github.com/npm/cli/commit/69f5ff863fccf91935b1f62b514fd2621b761903) view: convert command to use output instead of console (@lukekarrys)
* [`dc52222`](https://github.com/npm/cli/commit/dc52222123245d3faf2afa444d0223deb25e35b6) init: write package.json workspaces paths with / separators (@lukekarrys)
* [`31af1aa`](https://github.com/npm/cli/commit/31af1aaa9f6427bd61d752d54801d873c6242af8) refactor `help` to use `@npmcli/promise-spawn` (@lukekarrys)
* [`669ef94`](https://github.com/npm/cli/commit/669ef9476cac4679322bec69e7a55ff5992cf827) fund: correctly parse and use `which` config (@lukekarrys)
* [`72e6d6f`](https://github.com/npm/cli/commit/72e6d6f638db03dbe3c965be79ce05cb6fda12fc) generate workspace support for docs pages (@lukekarrys)
* [`450e50f`](https://github.com/npm/cli/commit/450e50fa555bfef869735b0195fe0a451e94eb3d) evaluate configs in command class (@lukekarrys)
* [`28ec922`](https://github.com/npm/cli/commit/28ec922e18c7178e840fd28cbbf78f56f0a7a653) [#5946](https://github.com/npm/cli/pull/5946) replace rimraf with fs.rm (@lukekarrys)

### Documentation

* [`f0038e5`](https://github.com/npm/cli/commit/f0038e5b7492a899da26fafd5f781291961ef427) [#6048](https://github.com/npm/cli/pull/6048) missing backtick in synopsis of npm init (#5837) (#6048) (@Peallyz)
* [`ca8ff00`](https://github.com/npm/cli/commit/ca8ff007d7abba1f3ae6646668ee840afa1191b6) [#6045](https://github.com/npm/cli/pull/6045) update outdated file path to definitions.js (@ericmutta)
* [`fe9debd`](https://github.com/npm/cli/commit/fe9debd7925c8e6d05d53f49f516fec8aede8890) [#6038](https://github.com/npm/cli/pull/6038) fix typos in definitions.js (#6038) (@lukekarrys, @ericmutta)
* [`fa27aca`](https://github.com/npm/cli/commit/fa27acaa72002c5cc80f59401dbd0ba817cda404) [#6018](https://github.com/npm/cli/pull/6018) fix typo in removal.md (@ericmutta)
* [`82f69d9`](https://github.com/npm/cli/commit/82f69d90d58da8cc2a53570bfe2a1a9cc2574f0d) [#6026](https://github.com/npm/cli/pull/6026) fix typo in registry.md (@ericmutta)

### Dependencies

* [`ec09474`](https://github.com/npm/cli/commit/ec09474b371b0706d0d55a4968cf6ae545423568) [#5945](https://github.com/npm/cli/pull/5945) `minipass-fetch@3.0.1`
* [Workspace](https://github.com/npm/cli/releases/tag/arborist-v6.1.6): `@npmcli/arborist@6.1.6`
* [Workspace](https://github.com/npm/cli/releases/tag/config-v6.1.1): `@npmcli/config@6.1.1`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmdiff-v5.0.7): `libnpmdiff@5.0.7`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmexec-v5.0.7): `libnpmexec@5.0.7`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmfund-v4.0.7): `libnpmfund@4.0.7`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpack-v5.0.7): `libnpmpack@5.0.7`

## [9.2.0](https://github.com/npm/cli/compare/v9.1.3...v9.2.0) (2022-12-07)

### Features

* [`cf57ffa`](https://github.com/npm/cli/commit/cf57ffa90088fcf5b028cc02938baae6228b5a40) [#5888](https://github.com/npm/cli/pull/5888) discrete npm doctor commands (#5888) (@wraithgar)

### Bug Fixes

* [`dfd5d46`](https://github.com/npm/cli/commit/dfd5d461e0ee2163e210cc136d2bb7873dfeb363) [#5932](https://github.com/npm/cli/pull/5932) ignore implicit workspaces for completion (#5932) (@wraithgar)

### Dependencies

* [`2f2b146`](https://github.com/npm/cli/commit/2f2b1469565894ec777e6eb77fea7b607b797adb) [#5936](https://github.com/npm/cli/pull/5936) `npm-packlist@7.0.4` (#5936)
* [`372d158`](https://github.com/npm/cli/commit/372d158d2637120600a95abee64355ed1cb6f990) [#5935](https://github.com/npm/cli/pull/5935) `minimatch@5.1.1` (#5935)
* [`0e6c28b`](https://github.com/npm/cli/commit/0e6c28ba093f8c5d35df98afca28e842b247004b) [#5934](https://github.com/npm/cli/pull/5934) `ci-info@3.7.0` (#5934)
* [`0a3fe00`](https://github.com/npm/cli/commit/0a3fe000e2723ae6fdb8b1d3154fd3835057c992) [#5933](https://github.com/npm/cli/pull/5933) `minipass@4.0.0`
* [`6b77340`](https://github.com/npm/cli/commit/6b7734009ecd939fbb3d382cb92eb0cdbec7dcd3) `tar@6.1.13`
* [`cf0a174`](https://github.com/npm/cli/commit/cf0a17407abc577c27420a1c8a4a0c08c7cefce9) `ssri@10.0.1`
* [`3da9a1a`](https://github.com/npm/cli/commit/3da9a1a4ebcf1779035b5f9ae985c087f617efe3) `pacote@15.0.7`
* [`fee9b66`](https://github.com/npm/cli/commit/fee9b6686892a1c7f976c36ddd5d89b70c416817) `npm-registry-fetch@14.0.3`
* [`e940917`](https://github.com/npm/cli/commit/e940917befcdaf44ee7e24d31b540f4de8507734) `cacache@17.0.3`
* [`875bd56`](https://github.com/npm/cli/commit/875bd56c33ca5eef80c2a50a11808445f2a39a2a) `npm-package-arg@10.1.0`
* [`280b7a4`](https://github.com/npm/cli/commit/280b7a445e4a83d70980cf3c436745a1faa50c67) [#5927](https://github.com/npm/cli/pull/5927) `npm-packlist@7.0.3`
* [Workspace](https://github.com/npm/cli/releases/tag/arborist-v6.1.5): `@npmcli/arborist@6.1.5`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmaccess-v7.0.1): `libnpmaccess@7.0.1`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmdiff-v5.0.6): `libnpmdiff@5.0.6`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmexec-v5.0.6): `libnpmexec@5.0.6`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmfund-v4.0.6): `libnpmfund@4.0.6`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmhook-v9.0.1): `libnpmhook@9.0.1`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmorg-v5.0.1): `libnpmorg@5.0.1`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpack-v5.0.6): `libnpmpack@5.0.6`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmpublish-v7.0.6): `libnpmpublish@7.0.6`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmsearch-v6.0.1): `libnpmsearch@6.0.1`
* [Workspace](https://github.com/npm/cli/releases/tag/libnpmteam-v5.0.1): `libnpmteam@5.0.1`

## [9.1.3](https://github.com/npm/cli/compare/v9.1.2...v9.1.3) (2022-11-30)

### Bug Fixes

* [`ffbdea2`](https://github.com/npm/cli/commit/ffbdea286a08eeaf40ab83eea5bfe0602dc6bbcd) [#5894](https://github.com/npm/cli/pull/5894) npm pack filename on scoped packages (#5894) (@HenryNguyen5)
* [`c26d708`](https://github.com/npm/cli/commit/c26d708428a96da530092759b5ff6d67c7282348) [#5884](https://github.com/npm/cli/pull/5884) validate username at get-identity (#5884) (@sosoba, @nlf)

### Documentation

* [`ea948dc`](https://github.com/npm/cli/commit/ea948dceac5cfeef437c97874ab26c3275e75766) [#5881](https://github.com/npm/cli/pull/5881) update description of npm exec (#5881) (@styfle, @wraithgar)
* [`40f2c21`](https://github.com/npm/cli/commit/40f2c213d75a252665311b4f8775d297390aeb70) [#5865](https://github.com/npm/cli/pull/5865) ci-info url (#5865) (@wraithgar)
* [`681a45b`](https://github.com/npm/cli/commit/681a45bb48acd57aa64cb3241ea4915f5a12e029) [#5875](https://github.com/npm/cli/pull/5875) run the comand for directory workspaces (#5875) (@1aron)
* [`681a45b`](https://github.com/npm/cli/commit/681a45bb48acd57aa64cb3241ea4915f5a12e029) [#5875](https://github.com/npm/cli/pull/5875) add workspace directory example (#5875) (@1aron)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/arborist-v6.1.3...arborist-v6.1.4): `@npmcli/arborist@6.1.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.4...libnpmdiff-v5.0.5): `libnpmdiff@5.0.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.4...libnpmexec-v5.0.5): `libnpmexec@5.0.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.4...libnpmfund-v4.0.5): `libnpmfund@4.0.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.4...libnpmpack-v5.0.5): `libnpmpack@5.0.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.4...libnpmpublish-v7.0.5): `libnpmpublish@7.0.5`

## [9.1.2](https://github.com/npm/cli/compare/v9.1.1...v9.1.2) (2022-11-16)

### Bug Fixes

* [`d9654cf`](https://github.com/npm/cli/commit/d9654cffd7024ec2d068147868978fc994d696e4) [#5861](https://github.com/npm/cli/pull/5861) remove unwanted package.json entries (#5861) (@wraithgar)

### Dependencies

* [`a351685`](https://github.com/npm/cli/commit/a351685c4951b1d9e2ba86bc99e3706688813438) [#5858](https://github.com/npm/cli/pull/5858) move from @npmcli/ci-detect to ci-info (#5858)
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.1.2...arborist-v6.1.3): `@npmcli/arborist@6.1.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.3...libnpmdiff-v5.0.4): `libnpmdiff@5.0.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.3...libnpmexec-v5.0.4): `libnpmexec@5.0.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.3...libnpmfund-v4.0.4): `libnpmfund@4.0.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.3...libnpmpack-v5.0.4): `libnpmpack@5.0.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.3...libnpmpublish-v7.0.4): `libnpmpublish@7.0.4`

## [9.1.1](https://github.com/npm/cli/compare/v9.1.0...v9.1.1) (2022-11-09)

### Documentation

* [`1bff064`](https://github.com/npm/cli/commit/1bff0640ccb8414e2d416a5cf9d64e9ff03c6403) [#5819](https://github.com/npm/cli/pull/5819) config: document `npm config fix` (#5819) (@wraithgar)

### Dependencies

* [`335c7e4`](https://github.com/npm/cli/commit/335c7e4348f5505fad33b8a78348a02a82b91426) [#5813](https://github.com/npm/cli/pull/5813) `cacache@17.0.2`
* [`878ddfb`](https://github.com/npm/cli/commit/878ddfb5b68c03bdcd7d7da8dae92c4947942801) `@npmcli/fs@3.1.0`
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.1.1...arborist-v6.1.2): `@npmcli/arborist@6.1.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.2...libnpmdiff-v5.0.3): `libnpmdiff@5.0.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.2...libnpmexec-v5.0.3): `libnpmexec@5.0.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.2...libnpmfund-v4.0.3): `libnpmfund@4.0.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.2...libnpmpack-v5.0.3): `libnpmpack@5.0.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.2...libnpmpublish-v7.0.3): `libnpmpublish@7.0.3`

## [9.1.0](https://github.com/npm/cli/compare/v9.0.1...v9.1.0) (2022-11-02)

### Features

* [`706b3d3`](https://github.com/npm/cli/commit/706b3d3f227de43a095263926d2eef2b4e4cf2a9) [#5779](https://github.com/npm/cli/pull/5779) set --no-audit when installing outside of a project (like --global) (@fritzy)

### Bug Fixes

* [`1f5382d`](https://github.com/npm/cli/commit/1f5382dada181cda41f1504974de1e69a6c1ad7f) [#5789](https://github.com/npm/cli/pull/5789) don't set `stdioString` for any spawn/run-script calls (@lukekarrys)
* [`8fd614a`](https://github.com/npm/cli/commit/8fd614af5d6de970a6bbcffc538564d2a809411a) use promiseSpawn.open instead of opener (@nlf)
* [`41843ad`](https://github.com/npm/cli/commit/41843ad8a20bd20aacad2bb37fe473f2e76d5306) use an absolute path to notepad.exe by default, correct docs (@nlf)
* [`0c5834e`](https://github.com/npm/cli/commit/0c5834ed635833ef49fe10cc888025a5debebe21) [#5758](https://github.com/npm/cli/pull/5758) use hosted-git-info to parse registry urls (#5758) (@lukekarrys)

### Documentation

* [`ce6745c`](https://github.com/npm/cli/commit/ce6745c806d721f5e3c455a65fd44bfe03e9d2ae) [#5763](https://github.com/npm/cli/pull/5763) fixed some typos (#5763) (@AndrewDawes)

### Dependencies

* [`b89c19e`](https://github.com/npm/cli/commit/b89c19e9a7674b0bd9d336c14dee1bf381843648) [#5795](https://github.com/npm/cli/pull/5795) `cli-table3@0.6.3`
* [`6b6dfca`](https://github.com/npm/cli/commit/6b6dfca191cb8f7871f755b926fd5ae223ba697a) `fastest-levenshtein@1.0.16`
* [`9972ed1`](https://github.com/npm/cli/commit/9972ed1423d7a4f7ca03a34f5aa69321b81850fd) `@npmcli/ci-detect@3.0.1`
* [`024e612`](https://github.com/npm/cli/commit/024e612f55fc9906b49065dbabbee8b8261eb4eb) `abbrev@2.0.0`
* [`66f9bcd`](https://github.com/npm/cli/commit/66f9bcd10b8d8cb635593c526727056581c7955d) `nopt@7.0.0`
* [`5730d17`](https://github.com/npm/cli/commit/5730d17198e066077cb3ea6f78753746afc13603) `tar@6.1.12`
* [`2fef570`](https://github.com/npm/cli/commit/2fef570caf00bd92a3a4cf0b2bc4ce56fd8bd594) `node-gyp@9.3.0`
* [`abfb28b`](https://github.com/npm/cli/commit/abfb28b249183b8c033f8e7acc1546150cdac137) `@npmcli/run-script@6.0.0`
* [`205e2fd`](https://github.com/npm/cli/commit/205e2fdde91f4f21d92ccf0bf9e1ab9ab3053167) `pacote@15.0.6`
* [`ac25863`](https://github.com/npm/cli/commit/ac25863a33b75620ac9edf4057bfb9409028636a) remove opener, `@npmcli/promise-spawn@6.0.1`, `@npmcli/run-script@5.1.1`, `@npmcli/git@4.0.3`, `pacote@15.0.5`, `which@3.0.0`
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.1.0...arborist-v6.1.1): `@npmcli/arborist@6.1.1`
* [Workspace](https://github.com/npm/cli/compare/config-v6.0.1...config-v6.1.0): `@npmcli/config@6.1.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.1...libnpmdiff-v5.0.2): `libnpmdiff@5.0.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.1...libnpmexec-v5.0.2): `libnpmexec@5.0.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.1...libnpmfund-v4.0.2): `libnpmfund@4.0.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.1...libnpmpack-v5.0.2): `libnpmpack@5.0.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.1...libnpmpublish-v7.0.2): `libnpmpublish@7.0.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmversion-v4.0.0...libnpmversion-v4.0.1): `libnpmversion@4.0.1`

## [9.0.1](https://github.com/npm/cli/compare/v9.0.0...v9.0.1) (2022-10-26)

### Documentation

* [`b5fadd0`](https://github.com/npm/cli/commit/b5fadd0cec392f4bf6d60fa1358f96400be94667) [#5742](https://github.com/npm/cli/pull/5742) Better npx link (#5742) (@mrienstra)

### Dependencies

* [`de6618e`](https://github.com/npm/cli/commit/de6618e93182ba00b4be516db1efb3c51efa17ba) [#5757](https://github.com/npm/cli/pull/5757) `@npmcli/promise-spawn@5.0.0` (#5757)
* [`5625274`](https://github.com/npm/cli/commit/562527456d3862d871d042fa4ff6e38354e320ea) [#5755](https://github.com/npm/cli/pull/5755) `hosted-git-info@6.1.0` (#5755)
* [`32bdd68`](https://github.com/npm/cli/commit/32bdd686ccf826050075e770ffddf7401efa79c9) [#5754](https://github.com/npm/cli/pull/5754) `npm-packlist@7.0.2` (#5754)
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0...arborist-v6.1.0): `@npmcli/arborist@6.1.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.0...libnpmdiff-v5.0.1): `libnpmdiff@5.0.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0...libnpmexec-v5.0.1): `libnpmexec@5.0.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0...libnpmfund-v4.0.1): `libnpmfund@4.0.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0...libnpmpack-v5.0.1): `libnpmpack@5.0.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0...libnpmpublish-v7.0.1): `libnpmpublish@7.0.1`

## [9.0.0](https://github.com/npm/cli/compare/v9.0.0-pre.6...v9.0.0) (2022-10-19)

### Features

* [`e3b004c`](https://github.com/npm/cli/commit/e3b004c0d6dfcb153c4734af12afb09897e20932) [#5727](https://github.com/npm/cli/pull/5727) move cli and all workspaces out of prerelease mode (@lukekarrys)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.5...arborist-v6.0.0): `@npmcli/arborist@6.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmaccess-v7.0.0-pre.2...libnpmaccess-v7.0.0): `libnpmaccess@7.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.0-pre.3...libnpmdiff-v5.0.0): `libnpmdiff@5.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.5...libnpmexec-v5.0.0): `libnpmexec@5.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.5...libnpmfund-v4.0.0): `libnpmfund@4.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmhook-v9.0.0-pre.1...libnpmhook-v9.0.0): `libnpmhook@9.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmorg-v5.0.0-pre.1...libnpmorg-v5.0.0): `libnpmorg@5.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.4...libnpmpack-v5.0.0): `libnpmpack@5.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.4...libnpmpublish-v7.0.0): `libnpmpublish@7.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmsearch-v6.0.0-pre.1...libnpmsearch-v6.0.0): `libnpmsearch@6.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmteam-v5.0.0-pre.1...libnpmteam-v5.0.0): `libnpmteam@5.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmversion-v4.0.0-pre.1...libnpmversion-v4.0.0): `libnpmversion@4.0.0`

## [9.0.0-pre.6](https://github.com/npm/cli/compare/v9.0.0-pre.5...v9.0.0-pre.6) (2022-10-19)

### ⚠️ BREAKING CHANGES

* `npm` now outputs some json errors on stdout. Previously `npm` would output all json formatted errors on stderr, making it difficult to parse as the stderr stream usually has logs already written to it. In the future, `npm` will differentiate between errors and crashes. Errors, such as `E404` and `ERESOLVE`, will be handled and will continue to be output on stdout. In the case of a crash, `npm` will log the error as usual but will not attempt to display it as json, even in `--json` mode. Moving a case from the category of an error to a crash will not be considered a breaking change. For more information see npm/rfcs#482.
* `npm config set` will no longer accept deprecated or invalid config options.
* `timing` and `loglevel` changes
    - `timing` has been removed as a value for `--loglevel`
    - `--timing` will show timing information regardless of
      `--loglevel`, except when `--silent`
* deprecate boolean install flags in favor of `--install-strategy`
    * deprecate --global-style, --global now sets --install-strategy=shallow
    * deprecate --legacy-bundling, now sets --install-strategy=nested
* npm will no longer attempt to modify ownership of files it creates
* this package no longer attempts to change file ownership automatically
* this package no longer attempts to change file ownership automatically

### Features

* [`d3543e9`](https://github.com/npm/cli/commit/d3543e945e721783dcb83385935f282a4bb32cf3) output json formatted errors on stdout (#5716) (@lukekarrys)
* [`be642c6`](https://github.com/npm/cli/commit/be642c6b8e3df40fd43b0110b30d3ecd44086016) refuse to set deprecated/invalid config (#5719) (@wraithgar)
* [`332914b`](https://github.com/npm/cli/commit/332914b48b616099e586893b1df21480b7ddb733) separate configs for `--timing` and `--loglevel` (@lukekarrys)
* [`f653785`](https://github.com/npm/cli/commit/f6537855e1a34b84251993a49e1ee362082ada37) deprecated `key`, `cert` config options and updated registry scoped auth docs (@fritzy)
* [`de2d33f`](https://github.com/npm/cli/commit/de2d33f3ed42e187803bdd31db4f7a12f08f353c) add --install-strategy=hoisted|nested|shallow, deprecate --global-style, --legacy-bundling (#5709) (@fritzy)
* [`58065bc`](https://github.com/npm/cli/commit/58065bc679e6968742b5b15fa2fb82dd9e8ae988) [#5704](https://github.com/npm/cli/pull/5704) do not alter file ownership (@nlf)
* [`475e9b6`](https://github.com/npm/cli/commit/475e9b6c0c978a104dd2ee47bde22b0a031a95f9) [#5703](https://github.com/npm/cli/pull/5703) do not alter file ownership (@nlf)

### Bug Fixes

* [`6ffa5b7`](https://github.com/npm/cli/commit/6ffa5b7bbb8fd7cae1a0b955a1f762661ec5e9ed) `npm hook ls` duplicates hook name prefixes (#5295) (@gennadiygashev)
* [`1afe5ba`](https://github.com/npm/cli/commit/1afe5ba9647d1f0f55bf0a4bace543965d05daed) account for new npm-package-arg behavior (@wraithgar)
* [`353b5bb`](https://github.com/npm/cli/commit/353b5bb92c3f7899526536b597252b44aa8a712d) [#5710](https://github.com/npm/cli/pull/5710) remove chownr and mkdirp-infer-owner (@nlf)

### Documentation

* [`9e74d3e`](https://github.com/npm/cli/commit/9e74d3e847c4bc0abc630fbe81328e011d6f0187) update supported engines in readme (#5725) (@lukekarrys)

### Dependencies

* [`88137a3`](https://github.com/npm/cli/commit/88137a329c8ad418db265dd465768a7cf5ebccb1) `npmlog@7.0.1`
* [`2008ea6`](https://github.com/npm/cli/commit/2008ea6a807acbd97912799adfe97f276202cea6) `npm-package-arg@10.0.0`, `pacote@15.0.2`
* [`aa01072`](https://github.com/npm/cli/commit/aa010722996ef6de46e1bb937c6f8a94dc2844fa) [#5707](https://github.com/npm/cli/pull/5707) update the following dependencies
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.4...arborist-v6.0.0-pre.5): `@npmcli/arborist@6.0.0-pre.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmaccess-v7.0.0-pre.1...libnpmaccess-v7.0.0-pre.2): `libnpmaccess@7.0.0-pre.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.0-pre.2...libnpmdiff-v5.0.0-pre.3): `libnpmdiff@5.0.0-pre.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.4...libnpmexec-v5.0.0-pre.5): `libnpmexec@5.0.0-pre.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.4...libnpmfund-v4.0.0-pre.5): `libnpmfund@4.0.0-pre.5`
* [Workspace](https://github.com/npm/cli/compare/libnpmhook-v9.0.0-pre.0...libnpmhook-v9.0.0-pre.1): `libnpmhook@9.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmorg-v5.0.0-pre.0...libnpmorg-v5.0.0-pre.1): `libnpmorg@5.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.3...libnpmpack-v5.0.0-pre.4): `libnpmpack@5.0.0-pre.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.3...libnpmpublish-v7.0.0-pre.4): `libnpmpublish@7.0.0-pre.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmsearch-v6.0.0-pre.0...libnpmsearch-v6.0.0-pre.1): `libnpmsearch@6.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmteam-v5.0.0-pre.0...libnpmteam-v5.0.0-pre.1): `libnpmteam@5.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmversion-v4.0.0-pre.0...libnpmversion-v4.0.0-pre.1): `libnpmversion@4.0.0-pre.1`

## [9.0.0-pre.5](https://github.com/npm/cli/compare/v9.0.0-pre.4...v9.0.0-pre.5) (2022-10-13)

### ⚠️ BREAKING CHANGES

* the presence of auth related settings that are not scoped to a specific registry found in a config file is no longer supported and will throw errors
* the `node-version` and `npm-version` configs have been removed.
* links generated from git urls will now use `HEAD` instead of `master` as the default ref

### Features

* [`a09e19d`](https://github.com/npm/cli/commit/a09e19d88f046e54e8d75343883635a1bd056310) [#5696](https://github.com/npm/cli/pull/5696) introduce the `npm config fix` command (@nlf)
* [`d2963c6`](https://github.com/npm/cli/commit/d2963c67b992b9b3b9dd32f6f41cbbe4bcc580c8) explicitly validate config within the cli (@nlf)
* [`a5fec08`](https://github.com/npm/cli/commit/a5fec08348add7e75fa2498e6a9efe608b20aa8b) rewrite docs generation (@lukekarrys)

### Bug Fixes

* [`a35c784`](https://github.com/npm/cli/commit/a35c784f8c25dce05b4173edd6c3f8e7913d7b50) [#5691](https://github.com/npm/cli/pull/5691) config: remove `node-version` and `npm-version` (@wraithgar)

### Documentation

* [`a8532eb`](https://github.com/npm/cli/commit/a8532eb39504584cef452152948e015cef8c010a) [#5661](https://github.com/npm/cli/pull/5661) typo missing parentheses (@hbrls)
* [`542efdb`](https://github.com/npm/cli/commit/542efdb0a31f663cd899bc6d2ddad8fa88c20bc8) update `folders` page for modern npm (@shalvah)

### Dependencies

* [`cee3fd9`](https://github.com/npm/cli/commit/cee3fd9905c7eb0a5cb26a8c9c08c5db48becd15) `@npmcli/config@5.0.0`
* [`2a740b1`](https://github.com/npm/cli/commit/2a740b14c3789d80825b1345f2e99765fcb90351) [#5692](https://github.com/npm/cli/pull/5692) `hosted-git-info@6.0.0`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.2...libnpmpack-v5.0.0-pre.3): `libnpmpack@5.0.0-pre.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.2...libnpmpublish-v7.0.0-pre.3): `libnpmpublish@7.0.0-pre.3`

## [9.0.0-pre.4](https://github.com/npm/cli/compare/v9.0.0-pre.3...v9.0.0-pre.4) (2022-10-05)

### Features

* [`9609e9e`](https://github.com/npm/cli/commit/9609e9eed87c735f0319ac0af265f4d406cbf800) [#5605](https://github.com/npm/cli/pull/5605) use v3 lockfiles by default (#5605) (@fritzy)

### Bug Fixes

* [`e4e8ae2`](https://github.com/npm/cli/commit/e4e8ae20aef9e27e57282e87e8757d5b364abb39) libnpmpack: obey foregroundScripts (@winterqt)
* [`07fabc9`](https://github.com/npm/cli/commit/07fabc93007495f0926f4dd24b4350c07d92887d) [#5633](https://github.com/npm/cli/pull/5633) `npm link` should override `--install-links` (#5633) (@fritzy)
* [`02fcbb6`](https://github.com/npm/cli/commit/02fcbb67e6b7cf78cd6dc996570b0ba58132de22) [#5634](https://github.com/npm/cli/pull/5634) ensure Arborist constructor gets passed around everywhere for pacote (#5634) (@nlf)

### Documentation

* [`f37caad`](https://github.com/npm/cli/commit/f37caad9e92c50ae949014f6bee6375d9299fb39) [#5606](https://github.com/npm/cli/pull/5606) accurately describe install-links effect on relative paths (#5606) (@lukekarrys)
* [`97c32ed`](https://github.com/npm/cli/commit/97c32ed24d8fa2edcdbb9448839a1f1c9d8fb86f) [#5637](https://github.com/npm/cli/pull/5637) remove link to cache command (#5637) (@wraithgar)
* [`130bc9f`](https://github.com/npm/cli/commit/130bc9fb31fcff956765493a9e3cec668867c30e) [#5626](https://github.com/npm/cli/pull/5626) Remove circular reference (#5626) (@giovanniPepi)

### Dependencies

* [`5344d2c`](https://github.com/npm/cli/commit/5344d2ca9ffd1f6db473fd58b46b50179f899ff5) [#5644](https://github.com/npm/cli/pull/5644) `pacote@14.0.0`
* [`6a43b31`](https://github.com/npm/cli/commit/6a43b31eab8bd392ed684d2f906259ddfe0f26b5) `@npmcli/metavuln-calculator@4.0.0`
* [`501f8ca`](https://github.com/npm/cli/commit/501f8ca47bb042f19cdfca4026970caf7160f7f6) [#5640](https://github.com/npm/cli/pull/5640) `semver@7.3.8` (#5640)
* [`8b072dc`](https://github.com/npm/cli/commit/8b072dc113190ed49b296a5f02650b7d8cbf384a) [#5639](https://github.com/npm/cli/pull/5639) `@npmcli/ci-detect@3.0.0` (#5639)
* [`1ebbb44`](https://github.com/npm/cli/commit/1ebbb4454c09891ca2c9f9a11432c4a10ccf8c32) [#5638](https://github.com/npm/cli/pull/5638) `npm-profile@7.0.0` (#5638)
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.3...arborist-v6.0.0-pre.4): `@npmcli/arborist@6.0.0-pre.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.0-pre.1...libnpmdiff-v5.0.0-pre.2): `libnpmdiff@5.0.0-pre.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.3...libnpmexec-v5.0.0-pre.4): `libnpmexec@5.0.0-pre.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.3...libnpmfund-v4.0.0-pre.4): `libnpmfund@4.0.0-pre.4`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.1...libnpmpack-v5.0.0-pre.2): `libnpmpack@5.0.0-pre.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.1...libnpmpublish-v7.0.0-pre.2): `libnpmpublish@7.0.0-pre.2`

## [9.0.0-pre.3](https://github.com/npm/cli/compare/v9.0.0-pre.2...v9.0.0-pre.3) (2022-09-30)

### ⚠️ BREAKING CHANGES

* `npm pack` now follows a strict order of operations when applying ignore rules. If a files array is present in the package.json, then rules in .gitignore and .npmignore files from the root will be ignored.
* `--timing` file changes:
    - When run with the `--timing` flag, `npm` now writes timing data to a
    file alongside the debug log data, respecting the `logs-dir` option and
    falling back to `<CACHE>/_logs/` dir, instead of directly inside the
    cache directory.
    - The timing file data is no longer newline delimited JSON, and instead
    each run will create a uniquely named `<ID>-timing.json` file, with the
    `<ID>` portion being the same as the debug log.
    - Finally, the data inside the file now has three top level keys,
    `metadata`, `timers, and `unfinishedTimers` instead of everything being
    a top level key.

### Features

* [`3ae796d`](https://github.com/npm/cli/commit/3ae796d937bd36a5b1b9fd6e9e8473b4f2ddc32d) implement new `npm-packlist` behavior (@lukekarrys)
* [`e64d69a`](https://github.com/npm/cli/commit/e64d69aedecc0943425605b3a6dc68aec3ad93aa) [#5581](https://github.com/npm/cli/pull/5581) write eresolve error files to the logs directory (@lukekarrys)
* [`3445da0`](https://github.com/npm/cli/commit/3445da0138f9eed9d73d2b3f5f451fcc1fa2e3fe) timings are now written alongside debug log files (@lukekarrys)

### Documentation

* [`f0e7584`](https://github.com/npm/cli/commit/f0e758494698d9dd8a58d07bf71c87608c36869e) [#5601](https://github.com/npm/cli/pull/5601) update docs/logging for new --access default (@wraithgar)

### Dependencies

* [`bc21552`](https://github.com/npm/cli/commit/bc2155247d00b7a868c414f4bc86993069b035f9) [#5603](https://github.com/npm/cli/pull/5603) `npm-package-arg@9.1.2`
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.2...arborist-v6.0.0-pre.3): `@npmcli/arborist@6.0.0-pre.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmdiff-v5.0.0-pre.0...libnpmdiff-v5.0.0-pre.1): `libnpmdiff@5.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.2...libnpmexec-v5.0.0-pre.3): `libnpmexec@5.0.0-pre.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.2...libnpmfund-v4.0.0-pre.3): `libnpmfund@4.0.0-pre.3`
* [Workspace](https://github.com/npm/cli/compare/libnpmpack-v5.0.0-pre.0...libnpmpack-v5.0.0-pre.1): `libnpmpack@5.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmpublish-v7.0.0-pre.0...libnpmpublish-v7.0.0-pre.1): `libnpmpublish@7.0.0-pre.1`

## [9.0.0-pre.2](https://github.com/npm/cli/compare/v9.0.0-pre.1...v9.0.0-pre.2) (2022-09-23)

### ⚠️ BREAKING CHANGES

* the default `auth-type` config value is now `web`
* `login`, `adduser`, and `auth-type` changes
    - This removes all `auth-type` configs except `web` and `legacy`.
    - `login` and `adduser` are now separate commands that send different data to the registry.
    - `auth-type` config values `web` and `legacy` only try
    their respective methods, npm no longer tries them all and waits to see
    which one doesn't fail.

### Features

* [`66ed584`](https://github.com/npm/cli/commit/66ed58454418dd69c4cd8196ad8499e73f7e46e1) [#5551](https://github.com/npm/cli/pull/5551) default auth-type to web (#5551) (@wraithgar)
* [`6ee5b32`](https://github.com/npm/cli/commit/6ee5b320d2eab58c18d50b861b3cfabe7f24124a) query: display `queryContext` in results (@nlf)
* [`314311c`](https://github.com/npm/cli/commit/314311c61b8f341715c168199d52976ee3237077) [#5550](https://github.com/npm/cli/pull/5550) separate login/adduser, remove auth types (#5550) (@wraithgar)

### Bug Fixes

* [`0d90a01`](https://github.com/npm/cli/commit/0d90a011fff411c878ba4b44582f14ef7dbdceb1) [#5480](https://github.com/npm/cli/pull/5480) audit: add a condition to allow third-party registries returning E400 (#5480) (@juanheyns, Juan Heyns)

### Documentation

* [`2d756cb`](https://github.com/npm/cli/commit/2d756cbb05125dcb769f2ca4c1687e42568d5882) [#5527](https://github.com/npm/cli/pull/5527) add instruction to query objects with npm view (#5527) (@moonith)
* [`8743366`](https://github.com/npm/cli/commit/874336699681ac37857167b2438fac19c059511c) [#5519](https://github.com/npm/cli/pull/5519) add hash to "tag" config link (#5519) (@mrienstra, @lukekarrys)
* [`5645c51`](https://github.com/npm/cli/commit/5645c51410a730c4b9c6831cf81ab22efbe8c0ce) [#5521](https://github.com/npm/cli/pull/5521) link mentions of config parameters (#5521) (@mrienstra)
* [`19762b4`](https://github.com/npm/cli/commit/19762b4ac4b10741ff53ddd315be1fd23d9b1e28) [#5529](https://github.com/npm/cli/pull/5529) modify Misleading doc about bins (@Hafizur046)
* [`19762b4`](https://github.com/npm/cli/commit/19762b4ac4b10741ff53ddd315be1fd23d9b1e28) [#5529](https://github.com/npm/cli/pull/5529) modify misleading doc about package.json:bin (#5529) (@Hafizur046)
* [`8402fd8`](https://github.com/npm/cli/commit/8402fd8780c5e0461850da882dca024f7df1a681) [#5547](https://github.com/npm/cli/pull/5547) add `:outdated` pseudo selector to docs (@nlf)

### Dependencies

* [`d030f10`](https://github.com/npm/cli/commit/d030f10fd535433e5a824df1b099f500a71075dd) `@npmcli/query@2.0.0`
* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.1...arborist-v6.0.0-pre.2): `@npmcli/arborist@6.0.0-pre.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.1...libnpmexec-v5.0.0-pre.2): `libnpmexec@5.0.0-pre.2`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.1...libnpmfund-v4.0.0-pre.2): `libnpmfund@4.0.0-pre.2`

## [9.0.0-pre.1](https://github.com/npm/cli/compare/v9.0.0-pre.0...v9.0.0-pre.1) (2022-09-14)

### ⚠️ BREAKING CHANGES

* renames most of the `npm access` subcommands
* the api for libnpmaccess is different now

### Features

* [`9c32c6c`](https://github.com/npm/cli/commit/9c32c6c8d6fc5bdfd6af685731fe26920d7e5446) rewrite: rewrite `npm access` (@wraithgar)
* [`854521b`](https://github.com/npm/cli/commit/854521baa49ef88ff9586ec2cc5f1fbaee7fa364) rewrite: Rewrite libnpmaccess (@wraithgar)

### Bug Fixes

* [`c3d7549`](https://github.com/npm/cli/commit/c3d75499cfd4e3601c6ca31621b2f693af466c4d) add tag to publish log message (@wraithgar)

### Documentation

* [`fd0eebe`](https://github.com/npm/cli/commit/fd0eebe4c2b55dd69972aff7de1b4db14ea6799a) update registry docs header (@hughlilly)

### Dependencies

* [Workspace](https://github.com/npm/cli/compare/arborist-v6.0.0-pre.0...arborist-v6.0.0-pre.1): `@npmcli/arborist@6.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmaccess-v7.0.0-pre.0...libnpmaccess-v7.0.0-pre.1): `libnpmaccess@7.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmexec-v5.0.0-pre.0...libnpmexec-v5.0.0-pre.1): `libnpmexec@5.0.0-pre.1`
* [Workspace](https://github.com/npm/cli/compare/libnpmfund-v4.0.0-pre.0...libnpmfund-v4.0.0-pre.1): `libnpmfund@4.0.0-pre.1`

## [9.0.0-pre.0](https://github.com/npm/cli/compare/v8.19.1...v9.0.0-pre.0) (2022-09-08)

### ⚠ BREAKING CHANGES

* **workspaces:** all workspace packages are now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`
* this removes the `npm birthday` command
* this removes `npm set-script`
* this changes the default value of `install-links` to true
* this removes the `npm bin` command
* `npm` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

  * [`e95017a`](https://github.com/npm/cli/commit/e95017a07b041cbb3293e659dad853f76462c108) [#5485](https://github.com/npm/cli/pull/5485) feat(workspaces): update supported node engines in package.json (@lukekarrys)
  * [`49bbb2f`](https://github.com/npm/cli/commit/49bbb2fb9d56e02d94da652befaa3d445283090b) [#5455](https://github.com/npm/cli/pull/5455) feat: remove `npm birthday` (@wraithgar)
  * [`926f0ad`](https://github.com/npm/cli/commit/926f0adbd71949c905932a241a245b78c85ef643) [#5456](https://github.com/npm/cli/pull/5456) feat: remove `npm set-script` (@wraithgar)
  * [`2a8c2fc`](https://github.com/npm/cli/commit/2a8c2fcd124ce7d4b23a6c26552d097c6501ac74) [#5458](https://github.com/npm/cli/pull/5458) feat: default `install-links` to true (@wraithgar)
  * [`2e92800`](https://github.com/npm/cli/commit/2e9280072f9852466fa0944d3a0fdb0c8af156a9) [#5459](https://github.com/npm/cli/pull/5459) feat: remove `npm bin` (@wraithgar)
  * [`457d388`](https://github.com/npm/cli/commit/457d388c9a70b4bc6c2421f576c79fb7524ff259) [#5475](https://github.com/npm/cli/pull/5475) feat: update supported node engines in package.json (@wraithgar)

### Bug Fixes

  * [`41481f8`](https://github.com/npm/cli/commit/41481f8bc1de0fb92a2d6aab3d4a43292d1a1db7) [#5475](https://github.com/npm/cli/pull/5475) fix: attempt more graceful failure in older node versions (@wraithgar)

### Documentation

  * [`7fc2b6f`](https://github.com/npm/cli/commit/7fc2b6f3cc157c8727da9e480f1f552eae2451e2) [#5468](https://github.com/npm/cli/pull/5468) docs: remove duplicate description for `prepare` script (@kidonng)
  * [`285b39f`](https://github.com/npm/cli/commit/285b39f8d6915823fb424cca7161a0b445b86bd3) [#5324](https://github.com/npm/cli/pull/5324) docs: add documentation for expanded :semver selector (@nlf)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @npmcli/arborist bumped from ^5.6.1 to ^6.0.0-pre.0
    * libnpmaccess bumped from ^6.0.4 to ^7.0.0-pre.0
    * libnpmdiff bumped from ^4.0.5 to ^5.0.0-pre.0
    * libnpmexec bumped from ^4.0.12 to ^5.0.0-pre.0
    * libnpmfund bumped from ^3.0.3 to ^4.0.0-pre.0
    * libnpmhook bumped from ^8.0.4 to ^9.0.0-pre.0
    * libnpmorg bumped from ^4.0.4 to ^5.0.0-pre.0
    * libnpmpack bumped from ^4.1.3 to ^5.0.0-pre.0
    * libnpmpublish bumped from ^6.0.5 to ^7.0.0-pre.0
    * libnpmsearch bumped from ^5.0.4 to ^6.0.0-pre.0
    * libnpmteam bumped from ^4.0.4 to ^5.0.0-pre.0
    * libnpmversion bumped from ^3.0.7 to ^4.0.0-pre.0
