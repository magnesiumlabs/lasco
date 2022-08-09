# Max Height

Class generator for setting `max-height` property for an element.

## Quick reference

| Class          | Property             |
|----------------|----------------------|
| `max-h-0`      | `max-height: 0;`     |
| `max-h-full`   | `max-height: 100%;`  |
| `max-h-screen` | `max-height: 100vh;` |

## Usage

Use the `max-h-{index}` class for setup ratio aspect.

```html

<div class="max-h-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:max-h-full` will be only
apply on large screens size and above.

```html

<div class="max-h-0 lg:max-h-full">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

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

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "max-height": false
    )
);
```
