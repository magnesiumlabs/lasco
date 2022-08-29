---
outline: deep
---

# Grid Column

Utilities for applying `grid-column`, `grid-column-start` and `grid-column-end` to an element.

## Quick reference

| Class           | Property                          |
|-----------------|-----------------------------------|
| `col-auto`      | `grid-column: auto`               |
| `col-span-full` | `grid-column: 1 / -1;`            |
| `col-span-1`    | `grid-column: span 1 / span 1;`   |
| `col-span-2`    | `grid-column: span 2 / span 2;`   |
| `col-span-3`    | `grid-column: span 3 / span 3;`   |
| `col-span-4`    | `grid-column: span 4 / span 4;`   |
| `col-span-5`    | `grid-column: span 5 / span 5;`   |
| `col-span-6`    | `grid-column: span 6 / span 6;`   |
| `col-span-7`    | `grid-column: span 7 / span 7;`   |
| `col-span-8`    | `grid-column: span 8 / span 8;`   |
| `col-span-9`    | `grid-column: span 9 / span 9;`   |
| `col-span-10`   | `grid-column: span 10 / span 10;` |
| `col-span-11`   | `grid-column: span 11 / span 11;` |
| `col-span-12`   | `grid-column: span 12 / span 12;` |

## Usage

### Spanning columns

Use the `cols-span-{key}` class for use span column an element.

```html

<div class="col-span-6">
    <!-- ... -->
</div>
```

### Starting line

Use the `cols-start-{key}` class for use start line position an element.

```html

<div class="col-start-2">
    <!-- ... -->
</div>
```

### Ending line

Use the `cols-end-{key}` class for use end line position an element.

```html

<div class="col-end-4">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:col-span-12` will be only
apply on large screens size and above.

```html

<div class="col-span-6 lg:col-span-12">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `grid-columns` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "grid-column": (
            "span-13": "span 13 / span 13"
        ),
        "grid-column-start": (
           "14": "14"
        ),
        "grid-column-end": (
            "14": "14"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "grid-columns": false,
        "grid-column-start": false,
        "grid-column-end": false
    )
);
```
