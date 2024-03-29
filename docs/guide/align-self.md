---
outline: deep
---

# Align Self

Utilities for applying `align-self` property an element.

## Quick reference

| Class                 | Property                | Token      |
|-----------------------|-------------------------|------------|
| `align-self-auto`     | `align-self: auto;`     | `auto`     |
| `align-self-start`    | `align-self: start;`    | `start`    |
| `align-self-end`      | `align-self: end;`      | `end`      |
| `align-self-center`   | `align-self: center;`   | `center`   |
| `align-self-stretch`  | `align-self: stretch;`  | `stretch`  |
| `align-self-baseline` | `align-self: baseline;` | `baseline` |

## Usage

Use the `align-self-{key}` class for set up the align-self type.

```html

<div class="align-self-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-self-start` will be
only apply on large screens size and above.

```html

<div class="align-self-center lg:align-self-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `align-self` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-self": (
            "center"
        )
    )
);
```
