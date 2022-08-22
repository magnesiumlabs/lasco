---
outline: deep
---

# Flex Grow

Utilities for applying `flex-grow` type of element.

## Quick reference

| Class         | Property        |
|---------------|-----------------|
| `flex-grow`   | `flex-grow: 1;` |
| `flex-grow-0` | `flex-grow: 0;` |

## Usage

Use the `flex-grow-{amount}` class for set up the flex-grow type.

```html

<div class="flex-grow">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-grow-0` will be only
apply on large screens size and above.

```html

<div class="flex-grow lg:flex-grow-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `flex-grow` type utilities. You can easily extend
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-grow": (
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
        "flex-grow": false
    )
);
```
