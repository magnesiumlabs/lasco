# Order

Utilities for applying `order` to an element.

| Class        | Property    |
|--------------|-------------|
| `order-none` | `order: 0;` |

## Usage

Use the `order-{key}` class for setup ratio aspect.

```html

<div class="order-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:order-12` will be only
apply on large screens size and above.

```html

<div class="order-none lg:order-12">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose order utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "order": (
            12: 12,
            "first": 1,
            "last": 9999,
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "order": false
    )
);
```
