---
outline: deep
---

# Fill

Utilities for applying `fill` to an element.

## Quick reference

| Class              | Property              |
|--------------------|-----------------------|
| `fill-none;`       | `fill: none;`         |
| `fill-current`     | `fill: currentColor;` |
| `fill-transparent` | `fill: transparent;`  |
| `fill-black`       | `fill: #000;`         |
| `fill-white`       | `fill: #fff;`         |

## Usage

Use the `fill-{key}` class for setup fill color.

```html

<div class="fill-black">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:fill-black` will be only
apply on large screens size and above.

```html

<div class="fill-transparent lg:fill-black">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `fill` utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "fill": (
            "red": red
        )
    )
);
```
