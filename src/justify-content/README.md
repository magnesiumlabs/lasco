# Justify Content

Utilities for applying `justify-content` property an element.

## Usage

Use the `justify-content-{key}` class for set up the justify-content type.

```html

<div class="justify-content-center">
    <!-- ... -->
</div>
```

### Classes

| Class                     | Property                          |
|---------------------------|-----------------------------------|
| `justify-content-start`   | `justify-content: flex-start;`    |
| `justify-content-end`     | `justify-content: flex-end;`      |
| `justify-content-center`  | `justify-content: center;`        |
| `justify-content-between` | `justify-content: space-between;` |
| `justify-content-around`  | `justify-content: space-around;`  |
| `justify-content-evenly`  | `justify-content: space-evenly;`  |
| `justify-content-stretch` | `justify-content: stretch;`       |

## Configuration

By default, the configuration provides a handful of general purpose justify-content type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "justify-content": (
            center
        )
    )
);
```

### Disabled

If you don't need the `justify-content` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "justify-content": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:justify-content-start` will be only apply on large screens size and above.

```html

<div class="justify-content-center lg:justify-content-start">
    <!-- ... -->
</div>
```
