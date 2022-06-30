# Align Self

Utilities for applying `align-self` property an element.

| Class                 | Property                  |
|-----------------------|---------------------------|
| `align-self-auto`     | `align-self: auto;`       |
| `align-self-start`    | `align-self: flex-start;` |
| `align-self-end`      | `align-self: flex-end;`   |
| `align-self-center`   | `align-self: center;`     |
| `align-self-stretch`  | `align-self: stretch;`    |
| `align-self-baseline` | `align-self: baseline;`   |

## Usage

Use the `align-self-{key}` class for set up the align-self type.

```html

<div class="align-self-center">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose `align-self` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-self": (
            center
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "align-self": false
    )
);
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-self-start` will be
only apply on large screens size and above.

```html

<div class="align-self-center lg:align-self-start">
    <!-- ... -->
</div>
```
