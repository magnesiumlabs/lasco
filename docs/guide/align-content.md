---
outline: deep
---

# Align Content

Utilities for applying `align-content` property an element.

## Quick reference

| Class                   | Property                        | Token           |
|-------------------------|---------------------------------|-----------------|
| `align-content-start`   | `align-content: start;`         | `start`         |
| `align-content-end`     | `align-content: end;`           | `end`           |
| `align-content-center`  | `align-content: center;`        | `center`        |
| `align-content-between` | `align-content: space-between;` | `space-between` |
| `align-content-around`  | `align-content: space-around;`  | `space-around`  |
| `align-content-evenly`  | `align-content: space-evenly;`  | `space-evenly`  |

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
            "center"
        )
    )
);
```
