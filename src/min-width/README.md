# Min Width

Class generator for setting `min-width` property for an element.

## Usage

Use the `min-w-{index}` class for setup ratio aspect.

```html

<div class="min-w-0">
    <!-- ... -->
</div>
```

### Classes

| Class          | Property            |
|----------------|---------------------|
| `min-w-0`      | `min-width: 0;`     |
| `min-w-full`   | `min-width: 100%;`  |
| `min-w-screen` | `min-width: 100vw;` |

## Configuration

By default, the configuration provides a handful of general purpose `min-width` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "min-width": (
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
        "min-width": true
    )
);
```

## Applying conditionally

### Breakpoints

To control the `min-width` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="min-w-0 lg:min-w-full">
    <!-- ... -->
</div>
```
