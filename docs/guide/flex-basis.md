---
outline: deep
---

# Flex Basis

Utilities for applying `flex-basis` to an element.

## Quick reference

| Class             | Property            |
|-------------------|---------------------|
| `flex-basis-0`    | `flex-basis: 0;`    |
| `flex-basis-auto` | `flex-basis: auto;` |
| `flex-basis-full` | `flex-basis: 100%;` |

## Usage

Use the `flex-basis-{key}` class for setup ratio aspect.

```html

<div class="flex-basis-auto">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-basis-0` will be only
apply on large screens size and above.

```html

<div class="flex-basis-auto lg:flex-basis-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose flex-basis utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-basis": (
            "50": "50%"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "flex-basis": false
    )
);
```

