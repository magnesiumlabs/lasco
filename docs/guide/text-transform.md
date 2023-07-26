---
outline: deep
---

# Text Transform

Utilities for applying `text-transform` to an element.

## Quick reference

| Class             | Property                      | Token        |
|-------------------|-------------------------------|--------------|
| `text-uppercase`  | `text-transform: uppercase;`  | `uppercase`  |
| `text-lowercase`  | `text-transform: lowercase;`  | `lowercase`  |
| `text-capitalize` | `text-transform: capitalize;` | `capitalize` |
| `text-normal`     | `text-transform: none;`       | `normal`     |

## Usage

Use the `text-{key}` class for setup the `text-transform`.

```html

<div class="text-normal">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:text-uppercase` will be
only apply on large screens size and above.

```html

<div class="text-normal lg:text-uppercase">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `text-transform` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "text-transform": (
            "lowercase"
        )
    )
);
```
