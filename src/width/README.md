# Width

Class generator for setting `width` property for an element.

## Usage

Use the `w-{index}` class for setup ratio aspect.

```html

<div class="w-0">
    <!-- ... -->
</div>
```

### Classes

| Class      | Property        |
|------------|-----------------|
| `w-0`      | `width: 0;`     |
| `w-full`   | `width: 100%;`  |
| `w-screen` | `width: 100vw;` |

## Configuration

By default, the configuration provides a handful of general purpose `width` utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "width": (
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
        "width": true
    )
);
```

## Applying conditionally

### Breakpoints

To control the `width` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="w-0 lg:w-full">
    <!-- ... -->
</div>
```
