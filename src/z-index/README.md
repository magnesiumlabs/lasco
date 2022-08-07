# Z-Index

Utilities for applying position order to an element.

## Quick reference

| Class    | Property         |
|----------|------------------|
| `z-0`    | `z-index: 0;`    |
| `z-auto` | `z-index: auto;` |

## Usage

Use the `z-{key}` class for setup order position.

```html

<div class="z-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:z-auto` will be only apply
on large screens size and above.

```html

<div class="z-0 lg:z-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose position order utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "z-index": (
            10: 10
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "z-index": false
    )
);
```
