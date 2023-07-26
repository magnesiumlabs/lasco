---
outline: deep
---

# Text Align

Utilities for applying `text-align` to an element.

## Quick reference

| Class          | Property               | Token     |
|----------------|------------------------|-----------|
| `text-left`    | `text-align: left;`    | `left`    |
| `text-center`  | `text-align: center;`  | `center`  |
| `text-right`   | `text-align: right;`   | `right`   |
| `text-justify` | `text-align: justify;` | `justify` |

## Usage

Use the `text-{key}` class for setup the `text-align`.

```html

<div class="text-left">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:text-center` will be only
apply on large screens size and above.

```html

<div class="text-left lg:text-center">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `text-align` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "text-align": (
            "center"
        )
    )
);
```
