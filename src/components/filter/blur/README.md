# Blur

Utilities for applying blur of an element.

## Usage

Use the `blur-{radius}` class for setup ratio aspect.

```html

<div class="blur-0">
    <!-- ... -->
</div>
```

### Scales

| Class    | Property           |
|----------|--------------------|
| `blur-0` | `filter: blur(0);` |

### Configuration

By default, Lasco provides a handful of general purpose blur utilities. You can easily extend the default scales using
the Sass configuration.

```scss
@use "lasco" with (
    $blur: (
        lg: 16px
    )
);
```

> **Note:** the radius can be a pixel or rem value. _(Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()#examples))_

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:blur` will be only apply on large screens size and above.

```html

<div class="blur-0">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        blur
    )
);
```
