---
outline: deep
---

# Font Style

Utilities for applying `font-size` to an element.

## Quick reference

| Class       | Property           |
|-------------|--------------------|
| `text-base` | `font-size: 16px;` |

## Usage

Use the `text-{key}` class for set up the `font-size`.

```html

<div class="text-base">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:text-xs` will be only
apply on large screens size and above.

```html

<div class="text-base lg:text-xs">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `font-size` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "font-size": (
            "xs": "12px"
        )
    )
);
```
