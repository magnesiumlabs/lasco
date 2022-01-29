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

#### Layout

| Property          | Docs                                               |
|-------------------|----------------------------------------------------|
| `aspect-ratio`    | See [readme](/src/components/aspect-ratio#readme). |
| `display`         | See [readme](/src/components/display#readme).      |
| `position`        | See [readme](/src/components/position#readme).     |
| `z-index`         | See [readme](/src/components/z-index#readme).      |

#### Effect

| Property  | Docs                                          |
|-----------|-----------------------------------------------|
| `opacity` | See [readme](/src/components/opacity#readme). |

#### Sizing

| Property     | Docs                                             |
|--------------|--------------------------------------------------|
| `width`      | See [readme](/src/components/width#readme).      |
| `min-width`  | See [readme](/src/components/width/min#readme).  |
| `max-width`  | See [readme](/src/components/width/max#readme).  |
| `height`     | See [readme](/src/components/height#readme).     |
| `min-height` | See [readme](/src/components/height/min#readme). |
| `max-height` | See [readme](/src/components/height/max#readme). |

#### Filters

| Property     | Docs                                                    |
|--------------|---------------------------------------------------------|
| `blur`       | See [readme](/src/components/filter/blur#readme).       |
| `brightness` | See [readme](/src/components/filter/brightness#readme). |
| `contrast`   | See [readme](/src/components/filter/contrast#readme).   |
| `grayscale`  | See [readme](/src/components/filter/grayscale#readme).  |

#### Others

| Property          | Docs                                      |
|-------------------|-------------------------------------------|
| `flex-direction`  | _Coming soon_                             |
| `flex-wrap`       | _Coming soon_                             |
| `flex-grow`       | _Coming soon_                             |
| `flex-shrink`     | _Coming soon_                             |
| `gap`             | See [readme](/src/components/gap#readme). |
| `align-self`      | _Coming soon_                             |
| `align-items`     | _Coming soon_                             |
| `align-content`   | _Coming soon_                             |
| `justify-self`    | _Coming soon_                             |
| `justify-items`   | _Coming soon_                             |
| `justify-content` | _Coming soon_                             |
| `place-self`      | _Coming soon_                             |
| `place-items`     | _Coming soon_                             |
| `place-content`   | _Coming soon_                             |

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
