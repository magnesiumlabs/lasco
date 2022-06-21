# Font Weight

Utilities for applying `font-weight` to an element.

## Usage

Use the `font-{number}` class for set up the `font-weight`.

```html

<div class="font-400">
    <!-- ... -->
</div>
```

### Classes

| Class      | Property            |
|------------|---------------------|
| `font-100` | `font-weight: 100;` |
| `font-200` | `font-weight: 200;` |
| `font-300` | `font-weight: 300;` |
| `font-400` | `font-weight: 400;` |
| `font-500` | `font-weight: 500;` |
| `font-600` | `font-weight: 600;` |
| `font-700` | `font-weight: 700;` |
| `font-800` | `font-weight: 800;` |
| `font-900` | `font-weight: 900;` |

## Configuration

By default, the configuration provides a handful of general purpose `font-weight` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "font-weight": (
            400
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "font-weight": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:font-700` will be only
apply on large screens size and above.

```html

<div class="font-400 lg:font-700">
    <!-- ... -->
</div>
```
