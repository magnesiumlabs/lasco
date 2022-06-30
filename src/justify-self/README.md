# Justify Self

Utilities for applying `justify-self` property an element.

| Class                  | Property                 |
|------------------------|--------------------------|
| `justify-self-auto`    | `justify-self: auto;`    |
| `justify-self-start`   | `justify-self: start;`   |
| `justify-self-end`     | `justify-self: end;`     |
| `justify-self-center`  | `justify-self: center;`  |
| `justify-self-stretch` | `justify-self: stretch;` |

## Usage

Use the `justify-self-{key}` class for set up the justify-self type.

```html

<div class="justify-self-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:justify-self-start` will be
only apply on large screens size and above.

```html

<div class="justify-self-center lg:justify-self-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `justify-self` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "justify-self": (
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
        "justify-self": false
    )
);
```
