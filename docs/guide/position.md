---
outline: deep
---

# Position

Class generator for setting `position` property for an element.

## Quick reference

| Class      | Property              | Token      |
|------------|-----------------------|------------|
| `absolute` | `position: absolute;` | `absolute` |
| `fixed`    | `position: fixed;`    | `fixed`    |
| `relative` | `position: relative;` | `relative` |
| `static`   | `position: static;`   | `static`   |
| `sticky`   | `position: sticky;`   | `sticky`   |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="absolute">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:relative` will be only
apply on large screens size and above.

```html

<div class="absolute lg:relative">
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
        "position": (
            "fixed"
        )
    )
);
```
