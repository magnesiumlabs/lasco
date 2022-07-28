---
outline: deep
---

# Grayscale

Utilities for applying grayscale to an element.

## Quick reference

| Class           | Property                |
|-----------------|-------------------------|
| `grayscale-0`   | `filter: grayscale(0);` |
| `grayscale-100` | `filter: grayscale(1);` |

## Usage

Use the `grayscale-{amount}` class for setup ratio aspect.

```html

<div class="grayscale-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:grayscale` will be only
apply on large screens size and above.

```html

<div class="grayscale-0 lg:grayscale">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose grayscale utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "grayscale": (
            "50": "0.5"
        )
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness()#exemples))_

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "grayscale": false
    )
);
```

