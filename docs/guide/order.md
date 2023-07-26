---
outline: deep
---

# Order

Utilities for applying `order` to an element.

## Quick reference

| Class      | Property     |
|------------|--------------|
| `order-0`  | `order: 0;`  |
| `order-1`  | `order: 1;`  |
| `order-2`  | `order: 2;`  |
| `order-3`  | `order: 3;`  |
| `order-4`  | `order: 4;`  |
| `order-5`  | `order: 5;`  |
| `order-6`  | `order: 6;`  |
| `order-7`  | `order: 7;`  |
| `order-8`  | `order: 8;`  |
| `order-9`  | `order: 9;`  |
| `order-10` | `order: 10;` |
| `order-11` | `order: 11;` |
| `order-12` | `order: 12;` |

## Usage

Use the `order-{key}` class for setup ratio aspect.

```html

<div class="order-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:order-12` will be only
apply on large screens size and above.

```html

<div class="order-none lg:order-12">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose order utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "order": (
            "13": "13",
            "first": "1",
            "last": "9999"
        )
    )
);
```
