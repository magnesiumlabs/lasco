# Brightness

Utilities for applying brightness of an element.

## Usage

Use the `brightness-{amount}` class for setup ratio aspect.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```

### Scales

| Class            | Property                 |
|------------------|--------------------------|
| `brightness-0`   | `filter: brightness(0);` |
| `brightness-100` | `filter: brightness(1);` |

### Configuration

First, allow `brightness` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "brightness": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose brightness utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "brightness": (
            50: 0.5
        )
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness()#exemples))_

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:brightness` will be only apply on large screens size and above.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```
