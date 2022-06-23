# Text Align

Utilities for applying `text-align` to an element.

| Class          | Property               |
|----------------|------------------------|
| `text-left`    | `text-align: left;`    |
| `text-center`  | `text-align: center;`  |
| `text-right`   | `text-align: right;`   |
| `text-justify` | `text-align: justify;` |

## Usage

Use the `text-{key}` class for setup the `text-align`.

```html

<div class="text-left">
    <!-- ... -->
</div>
```

## Configuration

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

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "text-align": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:text-center` will be only
apply on large screens size and above.

```html

<div class="text-left lg:text-center">
    <!-- ... -->
</div>
```
