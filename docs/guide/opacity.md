---
outline: deep
---

# Opacity

Class generator for setting `opacity` property for an element.

## Quick reference

| Class         | Property      |
|---------------|---------------|
| `opacity-0`   | `opacity: 0;` |
| `opacity-100` | `opacity: 1;` |

## Usage

Use the `opacity-{index}` class for setup ratio aspect.

```html

<div class="opacity-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:opacity-100` will be only
apply on large screens size and above.

```html

<div class="opacity-0 lg:opacity-100">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose opacity utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "opacity": (
            "50": "0.5"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "opacity": false
    )
);
```
