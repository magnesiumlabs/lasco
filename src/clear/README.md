# Clear

Utilities for applying clear type an element.

| Class         | Property        |
|---------------|-----------------|
| `clear-none`  | `clear: none;`  |
| `clear-left`  | `clear: left;`  |
| `clear-right` | `clear: right;` |
| `clear-both`  | `clear: both;`  |

## Usage

Use the `clear-{key}` class for set up the clear type.

```html

<div class="clear-left">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:clear-right` will be only
apply on large screens size and above.

```html

<div class="clear-left lg:clear-right">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose clear type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "clear": (
            left
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "clear": false
    )
);
```
