---
outline: deep
---

# Visibility

Class generator for setting `visibility` property for an element.

## Quick reference

| Class       | Property               | Token       |
|-------------|------------------------|-------------|
| `visible`   | `visibility: visible;` | `visible`   |
| `invisible` | `visibility: hidden;`  | `invisible` |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="visible">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:invisible` will be only
apply on large screens size and above.

```html

<div class="visible lg:invisible">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose position utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "visibility": (
            "visible"
        )
    )
);
```
