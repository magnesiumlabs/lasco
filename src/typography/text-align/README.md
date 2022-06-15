# Text Align

Utilities for applying `text-align` of an element.

## Usage

Use the `text-{key}` class for setup the `text-align`.

```html

<div class="text-left">
    <!-- ... -->
</div>
```

### Classes

| Class          | Property               |
|----------------|------------------------|
| `text-left`    | `text-align: left;`    |
| `text-center`  | `text-align: center;`  |
| `text-right`   | `text-align: right;`   |
| `text-justify` | `text-align: justify;` |

## Configuration

First, allow `text-align` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "text-align": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose `text-align` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "text-align": (
            center
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:text-center` will be only apply on large screens size and above.

```html

<div class="text-left lg:text-center">
    <!-- ... -->
</div>
```
