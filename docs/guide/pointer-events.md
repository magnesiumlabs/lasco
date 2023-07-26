---
outline: deep
---

# Pointer Events

Class generator for setting `pointer-events` property for an element.

## Quick reference

| Class                 | Property                | Token  |
|-----------------------|-------------------------|--------|
| `pointer-events-none` | `pointer-events: none;` | `none` |
| `pointer-event-auto`  | `pointer-events: auto;` | `auto` |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="pointer-events-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:pointer-events-auto` will
be only apply on large screens size and above.

```html

<div class="pointer-events-none lg:pointer-events-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose pointer-events utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "pointer-events": (
            "auto"
        )
    )
);
```
