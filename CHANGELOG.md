# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.25.0](https://github.com/magnesiumlabs/lasco/compare/v0.24.0...v0.25.0) (2022-02-19)


### Features

* **core:** use `@unsass/utilities` for string replace ([8c728ac](https://github.com/magnesiumlabs/lasco/commit/8c728acab0eea98c4c26ef971d89fc488348f0c0))


### Code Refactoring

* remove components folder ([a23b77f](https://github.com/magnesiumlabs/lasco/commit/a23b77f2923f82975c3688adce53e0205df00bdd))

## [0.24.0](https://github.com/magnesiumlabs/lasco/compare/v0.23.0...v0.24.0) (2022-02-15)


### Features

* **clear:** add main component ([d4b3330](https://github.com/magnesiumlabs/lasco/commit/d4b33307e3f341cd930a4539a4dbc71fe9af6533))


### Code Refactoring

* **core:** remove deprecated `$disabled`, `$breakpoints` and `$breakpoints-reset` variables ([2ef38dc](https://github.com/magnesiumlabs/lasco/commit/2ef38dc8ee83c1be8e0c3739153321f5655cb136))
* reorder styles.scss ([8c9b827](https://github.com/magnesiumlabs/lasco/commit/8c9b8277aed66150e28d60ae9f85ab7b90c4526f))

## [0.23.0](https://github.com/magnesiumlabs/lasco/compare/v0.22.0...v0.23.0) (2022-02-14)


### Features

* **font-weight:** add main component ([0f05daf](https://github.com/magnesiumlabs/lasco/commit/0f05daf96ce691f14d3c6b4e5ac9332239407794))
* **text-align:** add main component ([2e6eca4](https://github.com/magnesiumlabs/lasco/commit/2e6eca445d9a5c4a145ca4dff72ef29c12579e3f))
* **text-transform:** add main component ([47a6516](https://github.com/magnesiumlabs/lasco/commit/47a6516874363ba73168faaaec7c5184977ea27e))


### Code Refactoring

* **display, position:** remove unneeded `!default` ([dcc9c8f](https://github.com/magnesiumlabs/lasco/commit/dcc9c8f098e152ce02b7a5f1f41605afb2d18193))

## [0.22.0](https://github.com/magnesiumlabs/lasco/compare/v0.21.0...v0.22.0) (2022-02-14)


### Features

* **align, display:** use new `$extend` config parameter ([8ae1b63](https://github.com/magnesiumlabs/lasco/commit/8ae1b63c599fc25e8e0461f8e8167c6fa761d367))
* **aspect-ratio:** use new `$extend` config parameter ([541e8b7](https://github.com/magnesiumlabs/lasco/commit/541e8b770f972de8ec8d332e103ae442db1e25b4))
* **background-attachment, background-clip:** use new `$extend` config parameter ([8b1fd86](https://github.com/magnesiumlabs/lasco/commit/8b1fd8679d11bec2362ee4b48f566e896435174d))
* **background-color, background-image:** use new `$extend` config parameter ([47f3906](https://github.com/magnesiumlabs/lasco/commit/47f3906b25ae0dfda6318b86fc2aa36acc330f30))
* **background-origin, background-repeat:** use new `$extend` config parameter ([5305fe6](https://github.com/magnesiumlabs/lasco/commit/5305fe6c958195c309246e016dd82f656211aa17))
* **background-position, background-size:** use new `$extend` config parameter ([84feb1a](https://github.com/magnesiumlabs/lasco/commit/84feb1ab0be05bb89f707bb6cdcc9a330fe0b260))
* **blur:** use new `$extend` config parameter ([5c34918](https://github.com/magnesiumlabs/lasco/commit/5c349188619434326418b3bc848fc282da5f40c1))
* **brightness:** use new `$extend` config parameter ([de17049](https://github.com/magnesiumlabs/lasco/commit/de17049200943e5c12437bf0c6d5f28ab28add8e))
* **contrast, grayscale:** use new `$extend` config parameter ([1e3943f](https://github.com/magnesiumlabs/lasco/commit/1e3943f49c606b126ab3d4cdd05879e42ac7816a))
* **core:** add `extend` function ([f8a6cfa](https://github.com/magnesiumlabs/lasco/commit/f8a6cfac69b54af40de4a681007ce8b380509cd9))
* **core:** add `filter` function ([8b80eab](https://github.com/magnesiumlabs/lasco/commit/8b80eab750ec656975dc9a28cd166a0baa04ab28))
* **flex, justify, place:** use new `$extend` config parameter ([56fa63d](https://github.com/magnesiumlabs/lasco/commit/56fa63d00b7e15c8ccb2cfb4902d41cf00b91874))
* **gap:** use new `$extend` config parameter ([ff1a787](https://github.com/magnesiumlabs/lasco/commit/ff1a78784698bfa70f2165da7be94ad48e5c7523))
* **height, width:** use new `$extend` config parameter ([2d92ae4](https://github.com/magnesiumlabs/lasco/commit/2d92ae4ef86d7b408269a9cc491039cf675718c5))
* **opacity:** use new `$extend` config parameter ([828cdb2](https://github.com/magnesiumlabs/lasco/commit/828cdb25c874970abee627b9a127adf0dfcfcb65))
* **position:** use new `$extend` config parameter ([fac2d4e](https://github.com/magnesiumlabs/lasco/commit/fac2d4e2f59469de46df113ac113fca817016a1b))
* **screens:** add disabled option ([8b88739](https://github.com/magnesiumlabs/lasco/commit/8b88739126f91d6f33e6c32382ff1dfc53f8d993))
* **z-index:** use new `$extend` config parameter ([efa4f60](https://github.com/magnesiumlabs/lasco/commit/efa4f60b312f25d1a6834b962b1c229003188ee4))


### Bug Fixes

* **core:** `extend` function with white list ([7d948c6](https://github.com/magnesiumlabs/lasco/commit/7d948c6cce4ec938d75e36ea5bc53063d9dd208f))
* **core:** filter function error return ([74a5684](https://github.com/magnesiumlabs/lasco/commit/74a568434553d3b766bde7c26d34ccebfcc897a9))
* **width:** call good variable ([d967edf](https://github.com/magnesiumlabs/lasco/commit/d967edf94df026968bc3e8d9b52505b73bdd58fa))


### Code Refactoring

* **core:** remove unneeded mixins and functions ([dd8ad64](https://github.com/magnesiumlabs/lasco/commit/dd8ad64a00016a506e80ceed2cc4d4f5ae3464f7))
* remove unnneeded `[@use](https://github.com/use)` calls ([9ef53ba](https://github.com/magnesiumlabs/lasco/commit/9ef53ba3bd8421ec062089f82dd79d2ff2a27116))

## [0.21.0](https://github.com/magnesiumlabs/lasco/compare/v0.20.0...v0.21.0) (2022-02-06)


### Features

* **background-color:** wrap value with quote ([860342b](https://github.com/magnesiumlabs/lasco/commit/860342b46311cf8867e608027c2752d9d4da79c6))
* **background-image:** add multiple values support ([71cf1f2](https://github.com/magnesiumlabs/lasco/commit/71cf1f26d2c5086dc34358701f88b4cbda8a0885))
* **background-size:** add main classes ([148b8a0](https://github.com/magnesiumlabs/lasco/commit/148b8a0ecda5334a8c59c32132f57477127fdc41))
* **core:** add `is-quoted-string` function ([a74609e](https://github.com/magnesiumlabs/lasco/commit/a74609e4197af439723344063b4153f59dc320cd))

## [0.20.0](https://github.com/magnesiumlabs/lasco/compare/v0.19.0...v0.20.0) (2022-02-05)


### Features

* **background-position:** add main classes ([ec71433](https://github.com/magnesiumlabs/lasco/commit/ec7143338b106712ec551e56892429d1c582391b))

## [0.19.0](https://github.com/magnesiumlabs/lasco/compare/v0.18.0...v0.19.0) (2022-01-30)


### Features

* **background-image:** add main classes ([eb734a5](https://github.com/magnesiumlabs/lasco/commit/eb734a5b71d5eae1a331f3fd07ec880445c618dc))
* **background-origin:** add main classes ([03f1634](https://github.com/magnesiumlabs/lasco/commit/03f1634c30b822874d2a8cd7d2761afe81709835))
* **background-repeat:** add main classes ([afad551](https://github.com/magnesiumlabs/lasco/commit/afad55170934c2f39f21b28af3a32bee126b0ae7))
* **background-repeat:** change `bg-no-repeat` for `bg-repeat-none` ([56f589e](https://github.com/magnesiumlabs/lasco/commit/56f589e3ce500048b14e078903fbf3d572c1c1c1))
* **background:** add `[@error](https://github.com/error)` if value on filter option don't match ([7276a69](https://github.com/magnesiumlabs/lasco/commit/7276a69bb9225ef2666360a20e17f31e6be40410))

## [0.18.0](https://github.com/magnesiumlabs/lasco/compare/v0.17.0...v0.18.0) (2022-01-30)


### Features

* **background-attachment:** add main classes ([f7856b8](https://github.com/magnesiumlabs/lasco/commit/f7856b803ac2ad31a35fb97780d76da03789aff0))
* **background-clip:** add main classes ([da5143e](https://github.com/magnesiumlabs/lasco/commit/da5143ee1ba0c58ee41e38b05e67cb239a0436d8))
* **background-color:** add main classes ([45fec77](https://github.com/magnesiumlabs/lasco/commit/45fec776633b3820f422ef322834561f2cf9188d))
* **brightness, contrast:** add `1` to default classes ([8c70a0f](https://github.com/magnesiumlabs/lasco/commit/8c70a0f7cfe04ad59adfaa4f466a23d9a43ce90e))

## [0.17.0](https://github.com/magnesiumlabs/lasco/compare/v0.16.0...v0.17.0) (2022-01-29)


### Features

* **blur, brightness, contrast:** use custom properties ([9ac65ad](https://github.com/magnesiumlabs/lasco/commit/9ac65ad935fabf1fc23a23bcfe57ec044617f68f))
* **filter:** update README.md ([1ad10d4](https://github.com/magnesiumlabs/lasco/commit/1ad10d4a35e170a61cea85094ebb9d4a89da4d99))
* **grayscale:** add main classes ([20690cc](https://github.com/magnesiumlabs/lasco/commit/20690cc40b2bb273e9355db1f59eab679ef45060))
* **grayscale:** change `100%` to `1` ([401c666](https://github.com/magnesiumlabs/lasco/commit/401c666a0632e2a731cc547d577bc6e0bf793a4f))
* **grayscale:** use custom properties ([087a240](https://github.com/magnesiumlabs/lasco/commit/087a240d079a955513fc1f5a3c7680eeb68cca24))


### Bug Fixes

* **deps:** update to `nanoid` 3.2.0 ([4cac7e0](https://github.com/magnesiumlabs/lasco/commit/4cac7e02bcad10486e7a54d77509688999a2c87b))

## [0.16.0](https://github.com/magnesiumlabs/lasco/compare/v0.15.0...v0.16.0) (2022-01-26)


### Features

* **contrast:** add main classes ([04602d2](https://github.com/magnesiumlabs/lasco/commit/04602d2d88fbe90abc4863e21673f706032c90e2))


### Bug Fixes

* missing `[@charset](https://github.com/charset)` on sass ([2e81eb0](https://github.com/magnesiumlabs/lasco/commit/2e81eb085e2a3f07f541b5ff30c41f8a59f3aff0))

## [0.15.0](https://github.com/magnesiumlabs/lasco/compare/v0.14.0...v0.15.0) (2022-01-26)


### Features

* **brightness:** add main classes ([c8ee8d0](https://github.com/magnesiumlabs/lasco/commit/c8ee8d0586f4421cd4d4f2a17377f112641f4acc))

## [0.14.0](https://github.com/magnesiumlabs/lasco/compare/v0.13.0...v0.14.0) (2022-01-26)


### Features

* **blur:** add main classes ([ae6fa53](https://github.com/magnesiumlabs/lasco/commit/ae6fa536373736217d1710da1d61355b8d9e33d8))

## [0.13.0](https://github.com/magnesiumlabs/lasco/compare/v0.12.0...v0.13.0) (2022-01-26)


### Features

* **opacity:** add main classes ([030183c](https://github.com/magnesiumlabs/lasco/commit/030183c8ee9b28bf0cc1e339555850bc87d9c3c6))


### Code Refactoring

* remove unneeded `[@use](https://github.com/use)` calls ([4435752](https://github.com/magnesiumlabs/lasco/commit/443575251ca9b3de039084bc9e93ac4b1fa917a6))
* simplify private variables names ([0e3f7d2](https://github.com/magnesiumlabs/lasco/commit/0e3f7d2a3bea3d44b3674d6a07d4660cd56036ec))

## [0.12.0](https://github.com/magnesiumlabs/lasco/compare/v0.11.0...v0.12.0) (2022-01-03)


### Features

* **position:** add main classes ([f809bae](https://github.com/magnesiumlabs/lasco/commit/f809bae7f23e0004f50ee8fe3ea3e189fa654842))


### Code Refactoring

* **core:** remove commented code ([0f03d69](https://github.com/magnesiumlabs/lasco/commit/0f03d695531538e815db3df2e4e3e11bae585c10))

## [0.11.0](https://github.com/magnesiumlabs/lasco/compare/v0.10.0...v0.11.0) (2021-12-23)


### Features

* **z-index:** add main classes ([9518ff1](https://github.com/magnesiumlabs/lasco/commit/9518ff1c71175d044ccc0728b2b0850692e7c53f))


### Code Refactoring

* add some dedicated `_variables.scss` ([a2a6370](https://github.com/magnesiumlabs/lasco/commit/a2a637048268ce73c9f7fa92cc42d24353e10e07))
* **build:** better breakpoint code generation ([1b970b4](https://github.com/magnesiumlabs/lasco/commit/1b970b4d8c465ec1e32fb57a07f4855005803ec1))

## [0.10.0](https://github.com/magnesiumlabs/lasco/compare/v0.9.0...v0.10.0) (2021-12-20)


### Features

* **aspect ratio:** add main classes ([a6003f7](https://github.com/magnesiumlabs/lasco/commit/a6003f77d5591abc172d592dfb63172465a78d4d))
* **display:** add new properties ([6307486](https://github.com/magnesiumlabs/lasco/commit/63074862d7f3dadb5364cbfd15d524ba93e72897))

## [0.9.0](https://github.com/magnesiumlabs/lasco/compare/v0.8.0...v0.9.0) (2021-12-17)

## [0.8.0](https://github.com/magnesiumlabs/lasco/compare/v0.7.0...v0.8.0) (2021-12-17)


### Features

* **place:** add main classes ([03818c0](https://github.com/magnesiumlabs/lasco/commit/03818c065f91a61172451f80ed61712e29191a06))

## [0.7.0](https://github.com/magnesiumlabs/lasco/compare/v0.6.1...v0.7.0) (2021-12-16)

### [0.6.1](https://github.com/magnesiumlabs/lasco/compare/v0.6.0...v0.6.1) (2021-12-16)

## [0.6.0](https://github.com/magnesiumlabs/lasco/compare/v0.5.0...v0.6.0) (2021-12-16)


### Features

* **gap:** add main classes ([089a80b](https://github.com/magnesiumlabs/lasco/commit/089a80b27083bbc8aaf45cd68a431d953e2ee293))

## [0.5.0](https://github.com/magnesiumlabs/lasco/compare/v0.4.0...v0.5.0) (2021-12-15)


### Features

* **height:** add main classes ([6fc4c94](https://github.com/magnesiumlabs/lasco/commit/6fc4c9438086e284ba91bc1606092745b9968fe0))
* **options:** add `disabled` option ([84768af](https://github.com/magnesiumlabs/lasco/commit/84768af6d2359d08e024cffdeaf49b98c60e4fb6))
* **width:** add main classes ([b969c03](https://github.com/magnesiumlabs/lasco/commit/b969c0301693778b1d845f2673a785e96c2f8c25))

## [0.4.0](https://github.com/magnesiumlabs/lasco/compare/v0.3.0...v0.4.0) (2021-12-14)


### Features

* move files to `src` folder ([210af74](https://github.com/magnesiumlabs/lasco/commit/210af74c2ecba2d1c1b9b351987eab4bebd4d8b4))

## [0.3.0](https://github.com/magnesiumlabs/lasco/compare/v0.2.0...v0.3.0) (2021-12-13)


### Features

* **options:** add breakpoints options ([dcaa713](https://github.com/magnesiumlabs/lasco/commit/dcaa713ad37a6fc18f50a84ad9d83d8ee1d349f3))

## [0.2.0](https://github.com/magnesiumlabs/lasco/compare/v0.1.0...v0.2.0) (2021-12-13)


### Bug Fixes

* remove `main` on package.json ([0e87302](https://github.com/magnesiumlabs/lasco/commit/0e87302904a933b54d002f4d301a8020f428b421))

## 0.1.0 (2021-12-12)


### Features

* add `_declaration` mixin ([20e19fe](https://github.com/magnesiumlabs/lasco/commit/20e19feea1a350458d1ce49320c7c92d3db0800b))
* add main styles ([734c5dd](https://github.com/magnesiumlabs/lasco/commit/734c5dd5186a2680c471e16739068834a45c36dc))
* **display:** add main classes ([4a45fcb](https://github.com/magnesiumlabs/lasco/commit/4a45fcb11b5423511b74b44e79418c4671910de3))
* **flex:** add main classes ([473c32a](https://github.com/magnesiumlabs/lasco/commit/473c32a2e9cd8b79b059aed6b9a5eff1d8713a2d))
* simplify some class names ([715eaf2](https://github.com/magnesiumlabs/lasco/commit/715eaf294f2ad2be303339d5ba0aef453077826b))
