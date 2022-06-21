# Align Content

Utilities for applying `align-content` property an element.

## Usage

Use the `align-content-{key}` class for set up the align-content type.

```html

<div class="align-content-center">
    <!-- ... -->
</div>
```

### Classes

| Class                   | Property                        |
|-------------------------|---------------------------------|
| `align-content-start`   | `align-content: flex-start;`    |
| `align-content-end`     | `align-content: flex-end;`      |
| `align-content-center`  | `align-content: center;`        |
| `align-content-between` | `align-content: space-between;` |
| `align-content-around`  | `align-content: space-around;`  |
| `align-content-evenly`  | `align-content: space-evenly;`  |

## Configuration

By default, the configuration provides a handful of general purpose `align-content` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "align-content": (
            center
        )
    )
);
```

### Disabled

If you don't need the `align-content` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "align-content": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:align-content-start` will
be only apply on large screens size and above.

```html

<div class="align-content-center lg:align-content-start">
    <!-- ... -->
</div>
```
