# Text Transform

Utilities for applying `text-transform` of an element.

## Usage

Use the `text-{key}` class for setup the `text-transform`.

```html

<div class="text-normal">
    <!-- ... -->
</div>
```

### Scales

| Class             | Property                      |
|-------------------|-------------------------------|
| `text-uppercase`  | `text-transform: uppercase;`  |
| `text-lowercase`  | `text-transform: lowercase;`  |
| `text-capitalize` | `text-transform: capitalize;` |
| `text-normal`     | `text-transform: none;`       |

## Configuration

First, allow `text-transform` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "text-transform": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose `text-transform` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "text-transform": (
            lowercase
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:text-uppercase` will be only apply on large screens size and above.

```html

<div class="text-normal lg:text-uppercase">
    <!-- ... -->
</div>
```
