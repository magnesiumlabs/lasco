# Max Width

Class generator for setting `max-width` property for an element.

| Class          | Property            |
|----------------|---------------------|
| `max-w-0`      | `max-width: 0;`     |
| `max-w-full`   | `max-width: 100%;`  |
| `max-w-screen` | `max-width: 100vw;` |

## Usage

Use the `max-w-{index}` class for setup ratio aspect.

```html

<div class="max-w-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:max-w-full` will be only
apply on large screens size and above.

```html

<div class="max-w-0 lg:max-w-full">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

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

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "max-width": false
    )
);
```
