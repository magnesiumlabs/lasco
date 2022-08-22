---
outline: deep
---

# Flex

Utilities for applying `flex` to an element.

## Quick reference

| Class          | Property          |
|----------------|-------------------|
| `flex-auto`    | `flex: 1 1 auto;` |
| `flex-initial` | `flex: 0 1 auto;` |
| `flex-none`    | `flex: none;`     |

## Usage

Use the `flex-{key}` class for setup ratio aspect.

```html

<div class="flex-auto">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-none` will be only
apply on large screens size and above.

```html

<div class="flex-auto lg:flex-none">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose flex utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex": (
            "1": "1 1 0%"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "flex": false
    )
);
```
