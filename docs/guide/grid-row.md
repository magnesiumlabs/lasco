---
outline: deep
---

# Grid Row

Utilities for applying `grid-row`, `grid-row-start` and `grid-row-end` to an element.

## Quick reference

| Class           | Property                     |
|-----------------|------------------------------|
| `row-auto`      | `grid-row: auto`             |
| `row-span-full` | `grid-row: 1 / -1;`          |
| `row-span-1`    | `grid-row: span 1 / span 1;` |
| `row-span-2`    | `grid-row: span 2 / span 2;` |
| `row-span-3`    | `grid-row: span 3 / span 3;` |
| `row-span-4`    | `grid-row: span 4 / span 4;` |
| `row-span-5`    | `grid-row: span 5 / span 5;` |
| `row-span-6`    | `grid-row: span 6 / span 6;` |

## Usage

### Spanning rows

Use the `row-span-{key}` class for use span row an element.

```html

<div class="row-span-6">
    <!-- ... -->
</div>
```

### Starting line

Use the `row-start-{key}` class for use start line position an element.

```html

<div class="row-start-2">
    <!-- ... -->
</div>
```

### Ending line

Use the `row-end-{key}` class for use end line position an element.

```html

<div class="row-end-4">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:row-span-12` will be only
apply on large screens size and above.

```html

<div class="row-span-6 lg:row-span-12">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `grid-row` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "grid-row": (
            "span-7": "span 7 / span 7"
        ),
        "grid-row-start": (
           "7": "7"
        ),
        "grid-row-end": (
            "7": "7"
        )
    )
);
```
