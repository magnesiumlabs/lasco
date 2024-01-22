---
outline: deep
---

# Top / Right / Bottom / Left

Utilities for controlling the placement of positioned elements.

## Quick reference

| Class      | Property     | Token    |
|------------|--------------|----------|
| `top-0`    | `top: 0;`    | `top`    |
| `right-0`  | `right: 0;`  | `right`  |
| `bottom-0` | `bottom: 0;` | `bottom` |
| `left-0`   | `left: 0;`   | `left`   |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="top-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:left-0` will be only
apply on large screens size and above.

```html

<div class="top-0 lg:left-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose position utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "top": (
            "10": "10px"
        )
    )
);
```
