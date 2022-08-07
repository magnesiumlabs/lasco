# Align Items

Utilities for applying `align-items` property an element.

## Quick reference

| Class                  | Property                   |
|------------------------|----------------------------|
| `align-items-start`    | `align-items: flex-start;` |
| `align-items-end`      | `align-items: flex-end;`   |
| `align-items-center`   | `align-items: center;`     |
| `align-items-stretch`  | `align-items: stretch;`    |
| `align-items-baseline` | `align-items: baseline;`   |

## Usage

Use the `align-items-{key}` class for set up the align-items type.

```html

<div class="align-items-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-items-start` will be
only apply on large screens size and above.

```html

<div class="align-items-center lg:align-items-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `align-items` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-items": (
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
        "align-items": false
    )
);
```
