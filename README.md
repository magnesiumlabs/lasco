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

| Name              | Docs                                         |
|-------------------|----------------------------------------------|
| `display`         | _Coming soon_                                |
| `min-width`       | See [readme](/src/components/width#readme).  |
| `max-width`       | See [readme](/src/components/width#readme).  |
| `width`           | See [readme](/src/components/width#readme).  |
| `min-height`      | See [readme](/src/components/height#readme). |
| `max-height`      | See [readme](/src/components/height#readme). |
| `height`          | See [readme](/src/components/height#readme). |
| `flex-direction`  | _Coming soon_                                |
| `flex-wrap`       | _Coming soon_                                |
| `flex-grow`       | _Coming soon_                                |
| `flex-shrink`     | _Coming soon_                                |
| `align-self`      | _Coming soon_                                |
| `align-items`     | _Coming soon_                                |
| `align-content`   | _Coming soon_                                |
| `justify-self`    | _Coming soon_                                |
| `justify-items`   | _Coming soon_                                |
| `justify-content` | _Coming soon_                                |

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
