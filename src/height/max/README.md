# Max-Height

Class generator for setting `max-height` property for an element.

## Usage

Use the `max-h-{index}` class for setup ratio aspect.

```html

<div class="max-h-0">
    <!-- ... -->
</div>
```

### Classes

| Class          | Property             |
|----------------|----------------------|
| `max-h-0`      | `max-height: 0;`     |
| `max-h-full`   | `max-height: 100%;`  |
| `max-h-screen` | `max-height: 100vh;` |

## Configuration

First, allow `max-height` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "max-height": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose `max-height` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "max-height": (
            25: 25%,
            50: 50%,
            75: 75%
        )
    )
);
```

## Applying conditionally

### Breakpoints

To control the `max-height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="max-h-0 lg:max-h-full">
    <!-- ... -->
</div>
```
