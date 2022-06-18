# Font Style

Utilities for applying `font-style` of an element.

## Usage

Use the `font-{key}` class for set up the `font-style`.

```html

<div class="font-italic">
    <!-- ... -->
</div>
```

### Classes

| Class         | Property              |
|---------------|-----------------------|
| `font-normal` | `font-style: normal;` |
| `font-italic` | `font-style: italic;` |

## Configuration

By default, the configuration provides a handful of general purpose `font-style` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "font-style": (
            italic
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "font-style": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:font-normal` will be only apply on large screens size and above.

```html

<div class="font-italic lg:font-normal">
    <!-- ... -->
</div>
```
