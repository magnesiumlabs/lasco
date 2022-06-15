# Align-Self

Utilities for applying `align-self` property an element.

## Usage

Use the `align-self-{key}` class for set up the align-self type.

```html

<div class="align-self-center">
    <!-- ... -->
</div>
```

### Classes

| Class                 | Property                  |
|-----------------------|---------------------------|
| `align-self-auto`     | `align-self: auto;`       |
| `align-self-start`    | `align-self: flex-start;` |
| `align-self-end`      | `align-self: flex-end;`   |
| `align-self-center`   | `align-self: center;`     |
| `align-self-stretch`  | `align-self: stretch;`    |
| `align-self-baseline` | `align-self: baseline;`   |

## Configuration

By default, the configuration provides a handful of general purpose align-self type utilities. You can easily filter the
default scales using the Sass configuration.

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

If you don't need the `align-self` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "align-self": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:align-self-start` will be only apply on large screens size and above.

```html

<div class="align-self-center lg:align-self-start">
    <!-- ... -->
</div>
```