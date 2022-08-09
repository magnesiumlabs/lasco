# Height

Class generator for setting `height` property for an element.

## Quick reference

| Class      | Property         |
|------------|------------------|
| `h-0`      | `height: 0;`     |
| `h-auto`   | `height: auto;`  |
| `h-full`   | `height: 100%;`  |
| `h-screen` | `height: 100vh;` |

## Usage

Use the `h-{index}` class for setup ratio aspect.

```html

<div class="h-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:h-full` will be only apply
on large screens size and above.

```html

<div class="h-0 lg:h-full">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

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

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "height": false
    )
);
```
