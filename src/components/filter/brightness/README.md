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

By default, Lasco provides a handful of general purpose brightness utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $brightness: (
        50: 0.5
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness()#exemples))_

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:brightness` will be only apply on large screens size and above.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        brightness
    )
);
```
