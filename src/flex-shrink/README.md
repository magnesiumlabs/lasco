# Flex Shrink

Utilities for applying `flex-shrink` type of element.

## Usage

Use the `flex--shrink-{amount}` class for set up the flex-shrink type.

```html

<div class="flex-shrink">
    <!-- ... -->
</div>
```

### Classes

| Class           | Property          |
|-----------------|-------------------|
| `flex-shrink`   | `flex-shrink: 1;` |
| `flex-shrink-0` | `flex-shrink: 0;` |

## Configuration

By default, the configuration provides a handful of general purpose `flex-shrink` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-shrink": (
            "2": 2
        )
    )
);
```

### Disabled

If you don't need the `flex-shrink` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "flex-shrink": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:flex-shrink-0` will be only
apply on large screens size and above.

```html

<div class="flex-shrink lg:flex-shrink-0">
    <!-- ... -->
</div>
```
