---
outline: deep
---

# Aspect Ratio

Utilities for applying `aspect-ratio` to an element.

| Class           | Property             |
|-----------------|----------------------|
| `aspect-auto`   | `aspect-ratio: auto` |
| `aspect-square` | `aspect-ratio: 1/1`  |
| `aspect-video`  | `aspect-ratio: 16/9` |

## Usage

Use the `aspect-{key}` class for setup ratio aspect.

```html

<div class="aspect-square">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:aspect-video` will be only
apply on large screens size and above.

```html

<div class="aspect-auto lg:aspect-video">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `aspect-ratio` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "aspect-ratio": (
            "4/3": "4/3"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "aspect-ratio": false
    )
);
```
