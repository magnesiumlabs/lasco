# Background Image

Utilities for applying background image of an element.

## Usage

Use the `bg-image-{value}` class for setup background image.

```html

<div class="bg-image-none">
    <!-- ... -->
</div>
```

### Classes

| Class           | Property                  |
|-----------------|---------------------------|
| `bg-image-none` | `background-image: none;` |

## Configuration

First, allow `background-image` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-image": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose background image utilities. You can easily extend
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-image": (
            "single": "url('https://picsum.photos/200/300')", /// One-value syntax.
            "multiple": "linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5))" /// Multiple values syntax.
        )
    )
);
```

> **Note:** the value can be a `image` value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image#values))_

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-image-hero` will be only apply on large screens size and above.

```html

<div class="bg-image-none lg:bg-image-hero">
    <!-- ... -->
</div>
```
