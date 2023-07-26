---
outline: deep
---

# Background Color

Utilities for applying `background-color` to an element.

## Quick reference

| Class                  | Property                          |
|------------------------|-----------------------------------|
| `bg-color-inherit`     | `background-color: inherit;`      |
| `bg-color-current`     | `background-color: currentColor;` |
| `bg-color-transparent` | `background-color: transparent;`  |

## Usage

Use the `bg-color-{value}` class for setup background color.

```html

<div class="bg-color-border">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-color-transparent` will
be only apply on large screens size and above.

```html

<div class="bg-color-current lg:bg-color-transparent">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `background-color` utilities. You can easily extend
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-color": (
            "black": "#000"
        )
    )
);
```
