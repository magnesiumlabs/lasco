---
outline: deep
---

# Grid Template Columns

Utilities for applying `grid-template-columns` to an element.

## Quick reference

| Class            | Property                                             |
|------------------|------------------------------------------------------|
| `grid-cols-1`    | `grid-template-columns: repeat(1, minmax(0, 1fr));`  |
| `grid-cols-2`    | `grid-template-columns: repeat(2, minmax(0, 1fr));`  |
| `grid-cols-3`    | `grid-template-columns: repeat(3, minmax(0, 1fr));`  |
| `grid-cols-4`    | `grid-template-columns: repeat(4, minmax(0, 1fr));`  |
| `grid-cols-5`    | `grid-template-columns: repeat(5, minmax(0, 1fr));`  |
| `grid-cols-6`    | `grid-template-columns: repeat(6, minmax(0, 1fr));`  |
| `grid-cols-7`    | `grid-template-columns: repeat(7, minmax(0, 1fr));`  |
| `grid-cols-8`    | `grid-template-columns: repeat(8, minmax(0, 1fr));`  |
| `grid-cols-9`    | `grid-template-columns: repeat(9, minmax(0, 1fr));`  |
| `grid-cols-10`   | `grid-template-columns: repeat(10, minmax(0, 1fr));` |
| `grid-cols-11`   | `grid-template-columns: repeat(11, minmax(0, 1fr));` |
| `grid-cols-12`   | `grid-template-columns: repeat(12, minmax(0, 1fr));` |
| `grid-cols-none` | `grid-template-columns: none;`                       |

## Usage

Use the `grid-cols-{key}` class for setup grid columns.

```html

<div class="grid-cols-12">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:grid-cols-12` will be only
apply on large screens size and above.

```html

<div class="grid-cols-6 lg:grid-cols-12">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `grid-template-columns` utilities. You can easily
extend the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "grid-template-columns": (
            "13": "repeat(13, minmax(0, 1fr))", // Sets 13 columns grid.
            "foo": "200px repeat(auto-fill, 100px) 300px" // Sets custom values grid.
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "grid-template-columns": false
    )
);
```
