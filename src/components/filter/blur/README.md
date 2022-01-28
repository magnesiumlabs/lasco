# Blur

Class generator for setting `blur` filter property for an element.

## Classes

| Class    | Property           |
|----------|--------------------|
| `blur-0` | `filter: blur(0);` |

## Breakpoints

To control the `blur` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="blur-0">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `blur` scales:

```scss
@use "lasco" with (
    $blur: (
        lg: 16px
    )
);
```

> **Note:** the radius can be a pixel or rem value. _(Source [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()#examples))_

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        blur
    )
);
```

...will disable entirely the `blur` classes.
