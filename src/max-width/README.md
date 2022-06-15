# Max-Width

Class generator for setting `max-width` property for an element.

## Usage

Use the `max-w-{index}` class for setup ratio aspect.

```html

<div class="max-w-0">
    <!-- ... -->
</div>
```

### Classes

| Class          | Property            |
|----------------|---------------------|
| `max-w-0`      | `max-width: 0;`     |
| `max-w-full`   | `max-width: 100%;`  |
| `max-w-screen` | `max-width: 100vw;` |

## Configuration

By default, the configuration provides a handful of general purpose `max-width` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "max-width": (
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
        "max-width": false
    )
);
```

## Applying conditionally

### Breakpoints

To control the `max-width` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="max-w-0 lg:max-w-full">
    <!-- ... -->
</div>
```