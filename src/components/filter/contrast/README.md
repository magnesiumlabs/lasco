# Contrast

Class generator for setting `contrast` property for an element.

## Classes

| Class        | Property               |
|--------------|------------------------|
| `contrast-0` | `filter: contrast(0);` |

## Responsive

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
