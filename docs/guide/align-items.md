---
outline: deep
---

# Align Items

Utilities for applying `align-items` property an element.

## Quick reference

| Class                  | Property                 | Token      |
|------------------------|--------------------------|------------|
| `align-items-start`    | `align-items: start;`    | `start`    |
| `align-items-end`      | `align-items: end;`      | `end`      |
| `align-items-center`   | `align-items: center;`   | `center`   |
| `align-items-stretch`  | `align-items: stretch;`  | `baseline` |
| `align-items-baseline` | `align-items: baseline;` | `stretch`  |

## Usage

Use the `align-items-{key}` class for set up the align-items type.

```html

<div class="align-items-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-items-start` will be
only apply on large screens size and above.

```html

<div class="align-items-center lg:align-items-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `align-items` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-items": (
            "center"
        )
    )
);
```
