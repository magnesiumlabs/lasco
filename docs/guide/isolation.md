---
outline: deep
---

# Isolation

Class generator for setting `isolation` property for an element.

## Quick reference

| Class            | Property              | Token     |
|------------------|-----------------------|-----------|
| `isolation`      | `isolation: isolate;` | `DEFAULT` |
| `isolation-auto` | `isolation: auto;`    | `auto`    |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="isolation">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:isolation-auto` will be
only apply on large screens size and above.

```html

<div class="isolation lg:isolation-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose isolation utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "isolation": (
            "auto"
        )
    )
);
```
