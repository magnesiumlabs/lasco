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

## Properties

### Layout

| Property       | Docs                                                      |
|----------------|-----------------------------------------------------------|
| `aspect-ratio` | See [documentation](/src/components/aspect-ratio#readme). |
| `display`      | See [documentation](/src/components/display#readme).      |
| `position`     | See [documentation](/src/components/position#readme).     |
| `z-index`      | See [documentation](/src/components/z-index#readme).      |

### Effect

| Property  | Docs                                                 |
|-----------|------------------------------------------------------|
| `opacity` | See [documentation](/src/components/opacity#readme). |

### Sizing

| Property     | Docs                                                    |
|--------------|---------------------------------------------------------|
| `width`      | See [documentation](/src/components/width#readme).      |
| `min-width`  | See [documentation](/src/components/width/min#readme).  |
| `max-width`  | See [documentation](/src/components/width/max#readme).  |
| `height`     | See [documentation](/src/components/height#readme).     |
| `min-height` | See [documentation](/src/components/height/min#readme). |
| `max-height` | See [documentation](/src/components/height/max#readme). |

### Backgrounds

| Property                | Docs                                                               |
|-------------------------|--------------------------------------------------------------------|
| `background-attachment` | See [documentation](/src/components/background/attachment#readme). |
| `background-clip`       | See [documentation](/src/components/background/clip#readme).       |
| `background-color`      | See [documentation](/src/components/background/color#readme).      |
| `background-image`      | See [documentation](/src/components/background/image#readme).      |
| `background-origin`     | See [documentation](/src/components/background/origin#readme).     |
| `background-position`   | See [documentation](/src/components/background/position#readme).   |
| `background-repeat`     | See [documentation](/src/components/background/repeat#readme).     |
| `background-size`       | See [documentation](/src/components/background/size#readme).       |

### Filters

| Property     | Docs                                                           |
|--------------|----------------------------------------------------------------|
| `blur`       | See [documentation](/src/components/filter/blur#readme).       |
| `brightness` | See [documentation](/src/components/filter/brightness#readme). |
| `contrast`   | See [documentation](/src/components/filter/contrast#readme).   |
| `grayscale`  | See [documentation](/src/components/filter/grayscale#readme).  |

### Others

| Property          | Docs                                             |
|-------------------|--------------------------------------------------|
| `flex-direction`  | _Coming soon._                                   |
| `flex-wrap`       | _Coming soon._                                   |
| `flex-grow`       | _Coming soon._                                   |
| `flex-shrink`     | _Coming soon._                                   |
| `gap`             | See [documentation](/src/components/gap#readme). |
| `align-self`      | _Coming soon._                                   |
| `align-items`     | _Coming soon._                                   |
| `align-content`   | _Coming soon._                                   |
| `justify-self`    | _Coming soon._                                   |
| `justify-items`   | _Coming soon._                                   |
| `justify-content` | _Coming soon._                                   |
| `place-self`      | _Coming soon._                                   |
| `place-items`     | _Coming soon._                                   |
| `place-content`   | _Coming soon._                                   |

## Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        min-height,
        max-height
        // etc...
    )
);
```
