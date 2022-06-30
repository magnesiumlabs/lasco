# Text Transform

Utilities for applying `text-transform` to an element.

| Class             | Property                      |
|-------------------|-------------------------------|
| `text-uppercase`  | `text-transform: uppercase;`  |
| `text-lowercase`  | `text-transform: lowercase;`  |
| `text-capitalize` | `text-transform: capitalize;` |
| `text-normal`     | `text-transform: none;`       |

## Usage

Use the `text-{key}` class for setup the `text-transform`.

```html

<div class="text-normal">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose `text-transform` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "text-transform": (
            lowercase
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "text-transform": false
    )
);
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:text-uppercase` will be
only apply on large screens size and above.

```html

<div class="text-normal lg:text-uppercase">
    <!-- ... -->
</div>
```
