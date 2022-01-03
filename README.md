# Lasco

[![Version](https://flat.badgen.net/npm/v/lasco)](https://www.npmjs.com/package/lasco)
[![Downloads](https://flat.badgen.net/npm/dt/lasco)](https://www.npmjs.com/package/lasco)
[![License](https://flat.badgen.net/npm/license/lasco)](https://www.npmjs.com/package/lasco)

The Sass utilities classes library.

> **IMPORTANT:** Lasco is a work in progress and subject to major changes until 1.0 release.

## Installing

```shell
npm install lasco
```

## Usage

### Styles

```scss
@use "lasco/styles";
```

### Options

| Name                 | Default                                                                                                             | Description                               |
|----------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| `$breakpoints`       | See [breakpoint](https://github.com/sass-collective/sass-collective/tree/master/packages/breakpoint#tokens) plugin. | Sets a list of screens for breakpoint.    |
| `$breakpoints-reset` | `false`                                                                                                             | Sets the `$breakpoints` has new defaults. |
| `$disabled`          | `()`                                                                                                                | Sets a list of properties to disabled.    |

### Properties

| Property          | Status                                          | Docs                                               |
|-------------------|-------------------------------------------------|----------------------------------------------------|
| `display`         | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/display#readme).      |
| `min-width`       | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/width/min#readme).    |
| `max-width`       | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/width/max#readme).    |
| `width`           | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/width#readme).        |
| `min-height`      | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/height/min#readme).   |
| `max-height`      | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/height/max#readme).   |
| `height`          | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/height#readme).       |
| `aspect-ratio`    | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/aspect-ratio#readme). |
| `flex-direction`  | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `flex-wrap`       | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `flex-grow`       | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `flex-shrink`     | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `gap`             | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/gap#readme).          |
| `align-self`      | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `align-items`     | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `align-content`   | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `justify-self`    | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `justify-items`   | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `justify-content` | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `place-self`      | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `place-items`     | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `place-content`   | ![Version](https://flat.badgen.net/npm/v/lasco) | _Coming soon_                                      |
| `position`        | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/position#readme).     |
| `z-index`         | ![Version](https://flat.badgen.net/npm/v/lasco) | See [readme](/src/components/z-index#readme).      |

#### Disable property with `$disabled`

```scss
@use "lasco" with (
    $disabled: (
        min-height,
        max-height
        // etc...
    )
);
```
