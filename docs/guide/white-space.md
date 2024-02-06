---
outline: deep
---

# White Space

Utilities for applying `white-space` type of element.

## Quick reference

| Class                      | Property                     | Token          |
|----------------------------|------------------------------|----------------|
| `white-space-normal`       | `white-space: normal;`       | `normal`       |
| `white-space-nowrap`       | `white-space: nowrap;`       | `nowrap`       |
| `white-space-pre`          | `white-space: pre;`          | `pre`          |
| `white-space-pre-line`     | `white-space: pre-line;`     | `pre-line`     |
| `white-space-pre-wrap`     | `white-space: pre-wrap;`     | `pre-wrap`     |
| `white-space-break-spaces` | `white-space: break-spaces;` | `break-spaces` |

## Usage

Use the `{key}` class for set up the white-space type.

```html

<div class="white-space-normal">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:white-space-nowrap` will be
only apply on large screens size and above.

```html

<div class="white-space-normal lg:white-space-nowrap">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `white-space` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "white-space": (
            "normal"
        )
    )
);
```
