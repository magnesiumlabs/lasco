---
outline: deep
---

# Float

Utilities for applying `float` type of element.

## Quick reference

| Class         | Property        | Token   |
|---------------|-----------------|---------|
| `float-left`  | `float: left;`  | `left`  |
| `float-right` | `float: right;` | `right` |
| `float-none`  | `float: none;`  | `none`  |

## Usage

Use the `float-{key}` class for set up the display type.

```html

<div class="float-left">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:float-none` will be only
apply on large screens size and above.

```html

<div class="float-left lg:float-none">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `float` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "float": (
            "left"
        )
    )
);
```
