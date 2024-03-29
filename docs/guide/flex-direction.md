---
outline: deep
---

# Flex Direction

Utilities for applying `flex-direction` type of element.

## Quick reference

| Class                 | Property                          | Token            |
|-----------------------|-----------------------------------|------------------|
| `flex-row`            | `flex-direction: row;`            | `row`            |
| `flex-row-reverse`    | `flex-direction: row-reverse;`    | `row-reverse`    |
| `flex-column`         | `flex-direction: column;`         | `column`         |
| `flex-column-reverse` | `flex-direction: column-reverse;` | `column-reverse` |

## Usage

Use the `flex-{key}` class for set up the flex-direction type.

```html

<div class="flex-row">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-column` will be only
apply on large screens size and above.

```html

<div class="flex-row lg:flex-column">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `flex-direction` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-direction": (
            "column"
        )
    )
);
```
