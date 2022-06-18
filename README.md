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

## Configuration

```scss
@use "lasco" with (
    $extend: (
        "display": (
            flex
        )
    )
);
```

### Options

| Name       | Default | Description                                                                                               |
|------------|---------|-----------------------------------------------------------------------------------------------------------|
| `$extend`  | `()`    | Extend classes generator. List of [properties](#properties).                                              |
| `$screens` | `()`    | Extend breakpoint classes generator. See [@unsass/breakpoint](https://github.com/unsass/breakpoint) docs. |

### Disabled

For example, if you don't need the `display` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "display": false
    ),
    $screens: false // Disabled the breakpoints classes.
);
```

## Properties

### Layout

| Property       | Docs                                           |
|----------------|------------------------------------------------|
| `aspect-ratio` | See [documentation](/src/aspect-ratio#readme). |
| `clear`        | See [documentation](/src/clear#readme).        |
| `display`      | See [documentation](/src/display#readme).      |
| `position`     | See [documentation](/src/position#readme).     |
| `z-index`      | See [documentation](/src/z-index#readme).      |

### Effect

| Property  | Docs                                      |
|-----------|-------------------------------------------|
| `opacity` | See [documentation](/src/opacity#readme). |

### Sizing

| Property     | Docs                                         |
|--------------|----------------------------------------------|
| `min-width`  | See [documentation](/src/min-width#readme).  |
| `max-width`  | See [documentation](/src/max-width#readme).  |
| `width`      | See [documentation](/src/width#readme).      |
| `min-height` | See [documentation](/src/min-height#readme). |
| `max-height` | See [documentation](/src/max-height#readme). |
| `height`     | See [documentation](/src/height#readme).     |

### Typography

| Property          | Docs                                             |
|-------------------|--------------------------------------------------|
| `font-size`       | _Coming soon._                                   |
| `font-style`      | See [documentation](/src/font-style#readme).     |
| `font-weight`     | See [documentation](/src/font-weight#readme).    |
| `letter-spacing`  | _Coming soon._                                   |
| `line-height`     | _Coming soon._                                   |
| `text-align`      | See [documentation](/src/text-align#readme).     |
| `text-decoration` | _Coming soon._                                   |
| `text-transform`  | See [documentation](/src/text-transform#readme). |

### Backgrounds

| Property                | Docs                                                    |
|-------------------------|---------------------------------------------------------|
| `background-attachment` | See [documentation](/src/background-attachment#readme). |
| `background-clip`       | See [documentation](/src/background-clip#readme).       |
| `background-color`      | See [documentation](/src/background-color#readme).      |
| `background-image`      | See [documentation](/src/background-image#readme).      |
| `background-origin`     | See [documentation](/src/background-origin#readme).     |
| `background-position`   | See [documentation](/src/background-position#readme).   |
| `background-repeat`     | See [documentation](/src/background-repeat#readme).     |
| `background-size`       | See [documentation](/src/background-size#readme).       |

### Filters

| Property     | Docs                                         |
|--------------|----------------------------------------------|
| `blur`       | See [documentation](/src/blur#readme).       |
| `brightness` | See [documentation](/src/brightness#readme). |
| `contrast`   | See [documentation](/src/contrast#readme).   |
| `grayscale`  | See [documentation](/src/grayscale#readme).  |

### Flexbox & Grid

| Property          | Docs                                              |
|-------------------|---------------------------------------------------|
| `flex-direction`  | See [documentation](/src/flex-direction#readme).  |
| `flex-wrap`       | See [documentation](/src/flex-wrap#readme).       |
| `flex-grow`       | See [documentation](/src/flex-grow#readme).       |
| `flex-shrink`     | See [documentation](/src/flex-shrink#readme).     |
| `gap`             | See [documentation](/src/gap#readme).             |
| `justify-self`    | See [documentation](/src/justify-self#readme).    |
| `justify-items`   | See [documentation](/src/justify-items#readme).   |
| `justify-content` | See [documentation](/src/justify-content#readme). |
| `align-self`      | See [documentation](/src/align-self#readme).      |
| `align-items`     | See [documentation](/src/align-items#readme).     |
| `align-content`   | See [documentation](/src/align-content#readme).   |
| `place-self`      | See [documentation](/src/place-self#readme).      |
| `place-items`     | See [documentation](/src/place-items#readme).     |
| `place-content`   | See [documentation](/src/place-content#readme).   |

### Spacing

| Property  | Docs           |
|-----------|----------------|
| `margin`  | _Coming soon._ |
| `padding` | _Coming soon._ |
