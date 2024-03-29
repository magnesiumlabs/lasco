---
outline: deep
---

# Brightness

Utilities for applying `brightness` to an element.

## Quick reference

| Class            | Property                 |
|------------------|--------------------------|
| `brightness-0`   | `filter: brightness(0);` |
| `brightness-100` | `filter: brightness(1);` |

## Usage

Use the `brightness-{amount}` class for setup ratio aspect.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:brightness` will be only
apply on large screens size and above.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose brightness utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "brightness": (
            "50": "0.5"
        )
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness()#exemples))_
