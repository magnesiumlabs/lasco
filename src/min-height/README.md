# Min Height

Class generator for setting `min-height` property for an element.

| Class          | Property             |
|----------------|----------------------|
| `min-h-0`      | `min-height: 0;`     |
| `min-h-full`   | `min-height: 100%;`  |
| `min-h-screen` | `min-height: 100vh;` |

## Usage

Use the `min-h-{index}` class for setup ratio aspect.

```html

<div class="min-h-0">
    <!-- ... -->
</div>
```

## Configuration

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

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "min-height": false
    )
);
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:min-h-full` will be only
apply on large screens size and above.

```html

<div class="min-h-0 lg:min-h-full">
    <!-- ... -->
</div>
```
