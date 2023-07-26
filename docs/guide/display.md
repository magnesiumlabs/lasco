---
outline: deep
---

# Display

Utilities for applying `display` type of element.

## Quick reference

| Class          | Property                 | Token          |
|----------------|--------------------------|----------------|
| `block`        | `display: block;`        | `block`        |
| `inline-block` | `display: inline-block;` | `inline-block` |
| `flex`         | `display: flex;`         | `flex`         |
| `inline-flex`  | `display: inline-flex;`  | `inline-flex`  |
| `grid`         | `display: grid;`         | `grid`         |
| `inline-grid`  | `display: inline-grid;`  | `inline-grid`  |
| `table`        | `display: table;`        | `table`        |
| `inline-table` | `display: inline-table;` | `inline-table` |
| `hidden`       | `display: none;`         | `hidden`       |

## Usage

Use the `{key}` class for set up the display type.

```html

<div class="block">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:hidden` will be only apply
on large screens size and above.

```html

<div class="block lg:hidden">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `display` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "display": (
            "flex"
        )
    )
);
```
