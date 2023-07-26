---
outline: deep
---

# Grid Template Rows

Utilities for applying `grid-template-rows` to an element.

## Quick reference

| Class            | Property                                          |
|------------------|---------------------------------------------------|
| `grid-rows-1`    | `grid-template-rows: repeat(1, minmax(0, 1fr));`  |
| `grid-rows-2`    | `grid-template-rows: repeat(2, minmax(0, 1fr));`  |
| `grid-rows-3`    | `grid-template-rows: repeat(3, minmax(0, 1fr));`  |
| `grid-rows-4`    | `grid-template-rows: repeat(4, minmax(0, 1fr));`  |
| `grid-rows-5`    | `grid-template-rows: repeat(5, minmax(0, 1fr));`  |
| `grid-rows-6`    | `grid-template-rows: repeat(6, minmax(0, 1fr));`  |
| `grid-rows-none` | `grid-template-rows: none;`                       |

## Usage

Use the `grid-rows-{key}` class for setup grid rows.

```html

<div class="grid-rows-12">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:grid-rows-6` will be only
apply on large screens size and above.

```html

<div class="grid-rows-3 lg:grid-rows-6">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `grid-template-rows` utilities. You can easily
extend the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "grid-template-rows": (
            "7": "repeat(7, minmax(0, 1fr))", // Sets 7 rows grid.
        )
    )
);
```
