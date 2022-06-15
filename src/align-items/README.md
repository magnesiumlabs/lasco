# Align-Items

Utilities for applying `align-items` property an element.

## Usage

Use the `align-items-{key}` class for set up the align-items type.

```html

<div class="align-items-center">
    <!-- ... -->
</div>
```

### Classes

| Class                  | Property                   |
|------------------------|----------------------------|
| `align-items-start`    | `align-items: flex-start;` |
| `align-items-end`      | `align-items: flex-end;`   |
| `align-items-center`   | `align-items: center;`     |
| `align-items-stretch`  | `align-items: stretch;`    |
| `align-items-baseline` | `align-items: baseline;`   |

## Configuration

By default, the configuration provides a handful of general purpose align-items type utilities. You can easily filter the
default scales using the Sass configuration.

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

If you don't need the `align-items` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "align-items": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:align-items-start` will be only apply on large screens size and above.

```html

<div class="align-items-center lg:align-items-start">
    <!-- ... -->
</div>
```
