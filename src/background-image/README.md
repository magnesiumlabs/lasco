# Background Image

Utilities for applying `background-image` to an element.

| Class           | Property                  |
|-----------------|---------------------------|
| `bg-image-none` | `background-image: none;` |

## Usage

Use the `bg-image-{value}` class for setup background image.

```html

<div class="bg-image-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-image-hero` will be only
apply on large screens size and above.

```html

<div class="bg-image-none lg:bg-image-hero">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `background-image` utilities. You can easily extend
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

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "bg-image": false
    )
);
```
