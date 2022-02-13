# Contrast

Utilities for applying contrast of an element.

## Usage

Use the `contrast-{amount}` class for setup ratio aspect.

```html

<div class="contrast-0">
    <!-- ... -->
</div>
```

### Scales

| Class          | Property               |
|----------------|------------------------|
| `contrast-0`   | `filter: contrast(0);` |
| `contrast-100` | `filter: contrast(1);` |

## Configuration

First, allow `contrast` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "contrast": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose contrast utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "contrast": (
            50: 0.5
        )
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast()#exemples))_

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:contrast` will be only apply on large screens size and above.

```html

<div class="contrast-0">
    <!-- ... -->
</div>
```
