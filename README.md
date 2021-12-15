# Lasco

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

| Name        | Default | Description                            |
|-------------|---------|----------------------------------------|
| `$disabled` | `()`    | Sets a list of properties to disabled. |

### Properties

| Name               |
|--------------------|
| `$display`         |
| `$min-width`       |
| `$max-width`       |
| `$width`           |
| `$min-height`      |
| `$max-height`      |
| `$height`          |
| `$flex-direction`  |
| `$flex-wrap`       |
| `$flex-grow`       |
| `$flex-shrink`     |
| `$align-self`      |
| `$align-items`     |
| `$align-content`   |
| `$justify-self`    |
| `$justify-items`   |
| `$justify-content` |

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
