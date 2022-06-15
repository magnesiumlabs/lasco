# Height

Class generator for setting `height` property for an element.

## Usage

Use the `h-{index}` class for setup ratio aspect.

```html

<div class="h-0">
    <!-- ... -->
</div>
```

### Classes

| Class      | Property         |
|------------|------------------|
| `h-0`      | `height: 0;`     |
| `h-full`   | `height: 100%;`  |
| `h-screen` | `height: 100vh;` |

## Configuration

By default, the configuration provides a handful of general purpose `height` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "height": (
            25: 25%,
            50: 50%,
            75: 75%
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "height": false
    )
);
```

## Applying conditionally

### Breakpoints

To control the `height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="h-0 lg:h-full">
    <!-- ... -->
</div>
```
