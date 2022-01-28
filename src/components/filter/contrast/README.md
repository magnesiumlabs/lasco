# Contrast

Class generator for setting `contrast` filter property for an element.

## Classes

| Class        | Property               |
|--------------|------------------------|
| `contrast-0` | `filter: contrast(0);` |

## Breakpoints

To control the `contrast` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="contrast-0">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `contrast` scales:

```scss
@use "lasco" with (
    $contrast: (
        50: 0.5
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/filter-function/contrast()#exemples))_

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        contrast
    )
);
```

...will disable entirely the `contrast` classes.
