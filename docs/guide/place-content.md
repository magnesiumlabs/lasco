---
outline: deep
---

# Place Content

Utilities for applying `place-content` property an element.

## Quick reference

| Class                         | Property                        | Token           |
|-------------------------------|---------------------------------|-----------------|
| `place-content-start`         | `place-content: start;`         | `start`         |
| `place-content-end`           | `place-content: end;`           | `end`           |
| `place-content-center`        | `place-content: center;`        | `center`        |
| `place-content-space-between` | `place-content: space-between;` | `space-between` |
| `place-content-space-around`  | `place-content: space-around;`  | `space-around`  |
| `place-content-space-evenly`  | `place-content: space-evenly;`  | `space-evenly`  |
| `place-content-stretch`       | `place-content: stretch;`       | `stretch`       |

## Usage

Use the `place-content-{key}` class for set up the place-content type.

```html

<div class="place-content-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:place-content-start` will
be only apply on large screens size and above.

```html

<div class="place-content-center lg:place-content-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `place-content` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-content": (
            "center"
        )
    )
);
```
