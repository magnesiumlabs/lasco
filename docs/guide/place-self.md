---
outline: deep
---

# Place Self

Utilities for applying `place-self` property an element.

## Quick reference

| Class                | Property               | Token     |
|----------------------|------------------------|-----------|
| `place-self-auto`    | `place-self: auto;`    | `auto`    |
| `place-self-start`   | `place-self: start;`   | `start`   |
| `place-self-end`     | `place-self: end;`     | `end`     |
| `place-self-center`  | `place-self: center;`  | `center`  |
| `place-self-stretch` | `place-self: stretch;` | `stretch` |

## Usage

Use the `place-self-{key}` class for set up the place-self type.

```html

<div class="place-self-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:place-self-start` will be
only apply on large screens size and above.

```html

<div class="place-self-center lg:place-self-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `place-self` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-self": (
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
        "place-self": false
    )
);
```
