# Flex Wrap

Utilities for applying `flex-wrap` type of element.

## Usage

Use the `flex-{key}` class for set up the `flex-wrap` type.

```html

<div class="flex-wrap">
    <!-- ... -->
</div>
```

### Classes

| Class               | Property                   |
|---------------------|----------------------------|
| `flex-wrap`         | `flex-wrap: wrap;`         |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;` |
| `flex-nowrap`       | `flex-wrap: nowrap;`       |

## Configuration

By default, the configuration provides a handful of general purpose `flex-wrap` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-wrap": (
            nowrap
        )
    )
);
```

### Disabled

If you don't need the `flex-wrap` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "flex-wrap": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:nowrap` will be only apply
on large screens size and above.

```html

<div class="flex-wrap lg:nowrap">
    <!-- ... -->
</div>
```
