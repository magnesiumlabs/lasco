---
outline: deep
---

# Display

Utilities for applying `display` type of element.

## Quick reference

| Class          | Property                 |
|----------------|--------------------------|
| `block`        | `display: block;`        |
| `inline-block` | `display: inline-block;` |
| `flex`         | `display: flex;`         |
| `inline-flex`  | `display: inline-flex;`  |
| `grid`         | `display: grid;`         |
| `inline-grid`  | `display: inline-grid;`  |
| `table`        | `display: table;`        |
| `inline-table` | `display: inline-table;` |
| `hidden`       | `display: none;`         |

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

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "display": false
    )
);
```
