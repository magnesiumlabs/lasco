# Blur

Utilities for applying `blur` to an element.

## Quick reference

| Class    | Property           |
|----------|--------------------|
| `blur-0` | `filter: blur(0);` |

## Usage

Use the `blur-{radius}` class for setup ratio aspect.

```html

<div class="blur-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:blur` will be only apply on
large screens size and above.

```html

<div class="blur-0">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose blur utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "blur": (
            lg: 16px
        )
    )
);
```

> **Note:** the radius can be a pixel or rem value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()#examples))_

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "blur": false
    )
);
```
