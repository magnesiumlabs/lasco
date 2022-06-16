# Justify Self

Utilities for applying `justify-self` property an element.

## Usage

Use the `justify-self-{key}` class for set up the justify-self type.

```html

<div class="justify-self-center">
    <!-- ... -->
</div>
```

### Classes

| Class                  | Property                 |
|------------------------|--------------------------|
| `justify-self-auto`    | `justify-self: auto;`    |
| `justify-self-start`   | `justify-self: start;`   |
| `justify-self-end`     | `justify-self: end;`     |
| `justify-self-center`  | `justify-self: center;`  |
| `justify-self-stretch` | `justify-self: stretch;` |

## Configuration

By default, the configuration provides a handful of general purpose justify-self type utilities. You can easily filter the
default scales using the Sass configuration.

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

If you don't need the `justify-self` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "justify-self": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:justify-self-start` will be only apply on large screens size and above.

```html

<div class="justify-self-center lg:justify-self-start">
    <!-- ... -->
</div>
```
