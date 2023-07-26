---
outline: deep
---

# Contrast

Utilities for applying contrast to an element.

## Quick reference

| Class          | Property               |
|----------------|------------------------|
| `contrast-0`   | `filter: contrast(0);` |
| `contrast-100` | `filter: contrast(1);` |

## Usage

Use the `contrast-{amount}` class for setup ratio aspect.

```html

<div class="contrast-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:contrast` will be only
apply on large screens size and above.

```html

<div class="contrast-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose contrast utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "contrast": (
            "50": "0.5"
        )
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast()#exemples))_
