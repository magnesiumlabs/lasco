---
outline: deep
---

# Flex Shrink

Utilities for applying `flex-shrink` type of element.

## Quick reference

| Class           | Property          |
|-----------------|-------------------|
| `flex-shrink`   | `flex-shrink: 1;` |
| `flex-shrink-0` | `flex-shrink: 0;` |

## Usage

Use the `flex--shrink-{amount}` class for set up the flex-shrink type.

```html

<div class="flex-shrink">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-shrink-0` will be only
apply on large screens size and above.

```html

<div class="flex-shrink lg:flex-shrink-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `flex-shrink` type utilities. You can easily extend
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-shrink": (
            "2": "2"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "flex-shrink": false
    )
);
```
