---
outline: deep
---

# Flex Wrap

Utilities for applying `flex-wrap` type of element.

## Quick reference

| Class               | Property                   | Token          |
|---------------------|----------------------------|----------------|
| `flex-wrap`         | `flex-wrap: wrap;`         | `wrap`         |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;` | `wrap-reverse` |
| `flex-nowrap`       | `flex-wrap: nowrap;`       | `nowrap`       |

## Usage

Use the `flex-{key}` class for set up the `flex-wrap` type.

```html

<div class="flex-wrap">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:nowrap` will be only apply
on large screens size and above.

```html

<div class="flex-wrap lg:nowrap">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `flex-wrap` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-wrap": (
            "nowrap"
        )
    )
);
```
