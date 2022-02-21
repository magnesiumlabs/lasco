# Background Color

Utilities for applying background color of an element.

## Usage

Use the `bg-color-{value}` class for setup background color.

```html

<div class="bg-color-border">
    <!-- ... -->
</div>
```

### Scales

| Class                  | Property                          |
|------------------------|-----------------------------------|
| `bg-color-inherit`     | `background-color: inherit;`      |
| `bg-color-current`     | `background-color: currentColor;` |
| `bg-color-transparent` | `background-color: transparent;`  |

## Configuration

First, allow `background-color` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-color": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose background color utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-color": (
            "black": #000
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-color-transparent` will be only apply on large screens size and above.

```html

<div class="bg-color-current lg:bg-color-transparent">
    <!-- ... -->
</div>
```