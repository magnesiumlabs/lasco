---
outline: deep
---

# Font Style

Utilities for applying `font-style` to an element.

## Quick reference

| Class         | Property              | Token    |
|---------------|-----------------------|----------|
| `font-normal` | `font-style: normal;` | `normal` |
| `font-italic` | `font-style: italic;` | `italic` |

## Usage

Use the `font-{key}` class for set up the `font-style`.

```html

<div class="font-italic">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:font-normal` will be only
apply on large screens size and above.

```html

<div class="font-italic lg:font-normal">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `font-style` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "font-style": (
            "italic"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "font-style": false
    )
);
```
