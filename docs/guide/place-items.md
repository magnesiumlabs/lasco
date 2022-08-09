---
outline: deep
---

# Place Items

Utilities for applying `place-items` property an element.

## Quick reference

| Class                 | Property                | Token     |
|-----------------------|-------------------------|-----------|
| `place-items-start`   | `place-items: start;`   | `start`   |
| `place-items-end`     | `place-items: end;`     | `end`     |
| `place-items-center`  | `place-items: center;`  | `center`  |
| `place-items-stretch` | `place-items: stretch;` | `stretch` |

## Usage

Use the `place-items-{key}` class for set up the place-items type.

```html

<div class="place-items-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:place-items-start` will be
only apply on large screens size and above.

```html

<div class="place-items-center lg:place-items-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `place-items` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-items": (
            "center"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "place-items": false
    )
);
```

