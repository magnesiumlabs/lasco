# Min-Height

Class generator for setting `min-height` property for an element.

## Usage

Use the `min-h-{index}` class for setup ratio aspect.

```html

<div class="min-h-0">
    <!-- ... -->
</div>
```

### Classes

| Class          | Property             |
|----------------|----------------------|
| `min-h-0`      | `min-height: 0;`     |
| `min-h-full`   | `min-height: 100%;`  |
| `min-h-screen` | `min-height: 100vh;` |

## Configuration

First, allow `min-height` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "min-height": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose `min-height` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "min-height": (
            25: 25%,
            50: 50%,
            75: 75%
        )
    )
);
```

## Applying conditionally

### Breakpoints

To control the `min-height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="min-h-0 lg:min-h-full">
    <!-- ... -->
</div>
```
