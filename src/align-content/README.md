# Align Content

Utilities for applying `align-content` property an element.

## Quick reference

| Class                   | Property                        |
|-------------------------|---------------------------------|
| `align-content-start`   | `align-content: flex-start;`    |
| `align-content-end`     | `align-content: flex-end;`      |
| `align-content-center`  | `align-content: center;`        |
| `align-content-between` | `align-content: space-between;` |
| `align-content-around`  | `align-content: space-around;`  |
| `align-content-evenly`  | `align-content: space-evenly;`  |

## Usage

Use the `align-content-{key}` class for set up the align-content type.

```html

<div class="align-content-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-content-start` will
be only apply on large screens size and above.

```html

<div class="align-content-center lg:align-content-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `align-content` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-content": (
            center
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "align-content": false
    )
);
```
