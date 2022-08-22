---
outline: deep
---

# Background Size

Utilities for applying `background-size` to an element.

## Quick reference

| Class             | Property                    |
|-------------------|-----------------------------|
| `bg-size-auto`    | `background-size: auto;`    |
| `bg-size-contain` | `background-size: contain;` |
| `bg-size-cover`   | `background-size: cover;`   |

## Usage

Use the `bg-size-{value}` class for setup background size.

```html

<div class="bg-size-auto">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-size-cover` will be only
apply on large screens size and above.

```html

<div class="bg-size-auto lg:bg-size-cover">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose background size utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-size": (
            "50": "50%", /// One-value syntax.
            "50-auto": "50% auto", /// Two-value syntax.
            "multiple": "50%, 25%, 25%" /// Multiple backgrounds.
        )
    )
);
```

> **Note:** the value can be a `length` or `percentage` value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#values))_

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "bg-size": false
    )
);
```
