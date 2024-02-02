---
outline: deep
---

# Hyphens

Utilities for applying `hyphens` to an element.

## Quick reference

| Class            | Property           | Token    |
|------------------|--------------------|----------|
| `hyphens-none`   | `hyphens: none;`   | `none`   |
| `hyphens-manual` | `hyphens: manual;` | `manual` |
| `hyphens-auto`   | `hyphens: auto;`   | `auto`   |

## Usage

Use the `hyphens-{key}` class for setup ratio aspect.

```html

<div class="hyphens-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:hyphens-auto` will be only
apply on large screens size and above.

```html

<div class="hyphens-none lg:hyphens-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose hyphens utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "hyphens": (
            "auto"
        )
    )
);
```
