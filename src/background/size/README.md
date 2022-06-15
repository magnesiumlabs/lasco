# Background Size

Utilities for applying background size of an element.

## Usage

Use the `bg-size-{value}` class for setup background size.

```html

<div class="bg-size-auto">
    <!-- ... -->
</div>
```

### Classes

| Class             | Property                    |
|-------------------|-----------------------------|
| `bg-size-auto`    | `background-size: auto;`    |
| `bg-size-contain` | `background-size: contain;` |
| `bg-size-cover`   | `background-size: cover;`   |

## Configuration

First, allow `background-size` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-size": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose background size utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-size": (
            "50": "50%", /// One-value syntax.
            "50-auto": "50% auto", /// Two-value syntax.
            "multiple": "50%, 25%, 25%" /// Multiple backgrounds.
        )
    )
);
```

> **Note:** the value can be a `length` or `percentage` value. _(
Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#values))_

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-size-cover` will be only apply on large screens size and above.

```html

<div class="bg-size-auto lg:bg-size-cover">
    <!-- ... -->
</div>
```
