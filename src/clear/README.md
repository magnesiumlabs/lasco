# Clear

Utilities for applying clear type an element.

## Usage

Use the `clear-{key}` class for setup the clear type.

```html

<div class="clear-left">
    <!-- ... -->
</div>
```

### Classes

| Class         | Property        |
|---------------|-----------------|
| `clear-none`  | `clear: none;`  |
| `clear-left`  | `clear: left;`  |
| `clear-right` | `clear: right;` |
| `clear-both`  | `clear: both;`  |

## Configuration

First, allow `clear` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "clear": true
    )
);
```

### Extend

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

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:clear-right` will be only apply on large screens size and above.

```html

<div class="clear-left lg:clear-right">
    <!-- ... -->
</div>
```
