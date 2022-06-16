# Flex Grow

Utilities for applying flex-grow type of element.

## Usage

Use the `{key}` class for set up the flex-grow type.

```html

<div class="flex-grow">
    <!-- ... -->
</div>
```

### Classes

| Class         | Property        |
|---------------|-----------------|
| `flex-grow`   | `flex-grow: 1;` |
| `flex-grow-0` | `flex-grow: 0;` |

## Configuration

By default, the configuration provides a handful of general purpose `flex-grow` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-grow": (
            "2": 2
        )
    )
);
```

### Disabled

If you don't need the `flex-grow` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "flex-grow": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:flex-grow-0` will be only apply on large screens size and above.

```html

<div class="flex-grow lg:flex-grow-0">
    <!-- ... -->
</div>
```