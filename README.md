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

### Breakpoints

See [breakpoint](https://github.com/sass-collective/sass-collective/tree/master/packages/breakpoint#tokens) plugin.

```scss
@use "lasco" with (
    $extend: (
        "screens": (
            "lg": 1024px
        )
    )
);
```

#### Disable breakpoints

```scss
@use "lasco" with (
    $extend: (
        "screens": false
    )
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
| `width`      | See [documentation](/src/width#readme).      |
| `min-width`  | See [documentation](/src/width/min#readme).  |
| `max-width`  | See [documentation](/src/width/max#readme).  |
| `height`     | See [documentation](/src/height#readme).     |
| `min-height` | See [documentation](/src/height/min#readme). |
| `max-height` | See [documentation](/src/height/max#readme). |

### Typography

| Property          | Docs                                                        |
|-------------------|-------------------------------------------------------------|
| `font-size`       | _Coming soon._                                              |
| `font-style`      | _Coming soon._                                              |
| `font-weight`     | See [documentation](/src/typography/font-weight#readme).    |
| `letter-spacing`  | _Coming soon._                                              |
| `line-height`     | _Coming soon._                                              |
| `text-align`      | See [documentation](/src/typography/text-align#readme).     |
| `text-decoration` | _Coming soon._                                              |
| `text-transform`  | See [documentation](/src/typography/text-transform#readme). |

### Backgrounds

| Property                | Docs                                                    |
|-------------------------|---------------------------------------------------------|
| `background-attachment` | See [documentation](/src/background/attachment#readme). |
| `background-clip`       | See [documentation](/src/background/clip#readme).       |
| `background-color`      | See [documentation](/src/background/color#readme).      |
| `background-image`      | See [documentation](/src/background/image#readme).      |
| `background-origin`     | See [documentation](/src/background/origin#readme).     |
| `background-position`   | See [documentation](/src/background/position#readme).   |
| `background-repeat`     | See [documentation](/src/background/repeat#readme).     |
| `background-size`       | See [documentation](/src/background/size#readme).       |

### Filters

| Property     | Docs                                                |
|--------------|-----------------------------------------------------|
| `blur`       | See [documentation](/src/filter/blur#readme).       |
| `brightness` | See [documentation](/src/filter/brightness#readme). |
| `contrast`   | See [documentation](/src/filter/contrast#readme).   |
| `grayscale`  | See [documentation](/src/filter/grayscale#readme).  |

### Flexbox & Grid

| Property          | Docs                                  |
|-------------------|---------------------------------------|
| `flex-direction`  | _Coming soon._                        |
| `flex-wrap`       | _Coming soon._                        |
| `flex-grow`       | _Coming soon._                        |
| `flex-shrink`     | _Coming soon._                        |
| `gap`             | See [documentation](/src/gap#readme). |
| `justify-self`    | _Coming soon._                        |
| `justify-items`   | _Coming soon._                        |
| `justify-content` | _Coming soon._                        |
| `align-self`      | _Coming soon._                        |
| `align-items`     | _Coming soon._                        |
| `align-content`   | _Coming soon._                        |
| `place-self`      | _Coming soon._                        |
| `place-items`     | _Coming soon._                        |
| `place-content`   | _Coming soon._                        |

### Spacing

| Property  | Docs           |
|-----------|----------------|
| `margin`  | _Coming soon._ |
| `padding` | _Coming soon._ |
