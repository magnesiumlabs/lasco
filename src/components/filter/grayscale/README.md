# Grayscale

Utilities for applying filter grayscale of an element.

## Usage

Use the `grayscale-{amount}` class for setup ratio aspect.

```html
<div class="grayscale-0">
    <!-- ... -->
</div>
```

### Scales

| Class         | Property                |
|---------------|-------------------------|
| `grayscale-0` | `filter: grayscale(0);` |
| `grayscale`   | `filter: grayscale(1);` |

### Configuration

By default, Lasco provides a handful of general purpose grayscale utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $grayscale: (
        50: 0.5
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/filter-function/brightness()#exemples))_

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:grayscale` will be only apply on large screens size and above.

```html

<div class="grayscale-0 lg:grayscale">
    <!-- ... -->
</div>
```

### Disabled

If you want, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        grayscale
    )
);
```
