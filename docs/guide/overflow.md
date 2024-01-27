---
outline: deep
---

# overflow

Class generator for setting `overflow` property for an element.

## Quick reference

| Class                | Property               | Token     |
|----------------------|------------------------|-----------|
| `overflow-auto`      | `overflow: auto;`      | `auto`    |
| `overflow-x-auto`    | `overflow-x: auto;`    | `auto`    |
| `overflow-y-auto`    | `overflow-y: auto;`    | `auto`    |
| `overflow-hidden`    | `overflow: hidden;`    | `hidden`  |
| `overflow-x-hidden`  | `overflow-x: hidden;`  | `hidden`  |
| `overflow-y-hidden`  | `overflow-y: hidden;`  | `hidden`  |
| `overflow-x-clip`    | `overflow-x: clip;`    | `clip`    |
| `overflow-y-clip`    | `overflow-y: clip;`    | `clip`    |
| `overflow-visible`   | `overflow: visible;`   | `visible` |
| `overflow-x-visible` | `overflow-x: visible;` | `visible` |
| `overflow-y-visible` | `overflow-y: visible;` | `visible` |
| `overflow-scroll`    | `overflow: scroll;`    | `scroll`  |
| `overflow-x-scroll`  | `overflow-x: scroll;`  | `scroll`  |
| `overflow-y-scroll`  | `overflow-y: scroll;`  | `scroll`  |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="overflow-auto">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:overflow-scroll` will be only
apply on large screens size and above.

```html

<div class="overflow-auto lg:overflow-scroll">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose overflow utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "overflow": (
            "auto"
        )
    )
);
```
