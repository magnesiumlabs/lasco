---
outline: deep
---

# Object Fit

Utilities for applying object fit to an element.

## Quick reference

| Class               | Property                  | Token        |
|---------------------|---------------------------|--------------|
| `object-contain`    | `object-fit: contain;`    | `contain`    |
| `object-cover`      | `object-fit: cover;`      | `cover`      |
| `object-fill`       | `object-fit: fill;`       | `fill`       |
| `object-scale-down` | `object-fit: scale-down;` | `scale-down` |
| `object-none`       | `object-fit: none;`       | `none`       |

## Usage

Use the `object-{key}` class for set up the clear type.

```html

<div class="object-cover">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:object-contain` will be
only apply on large screens size and above.

```html

<div class="object-cover lg:object-contain">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose clear type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "object-fit": (
            "cover"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "object-fit": false
    )
);
```
