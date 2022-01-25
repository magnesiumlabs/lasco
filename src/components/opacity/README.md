# Opacity

Class generator for setting `opacity` property for an element.

## Classes

| Class         | Property      |
|---------------|---------------|
| `opacity-0`   | `opacity: 0;` |
| `opacity-100` | `opacity: 1;` |

## Responsive

To control the `opacity` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="opacity-0 md:opacity-100">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `opacity` scales:

```scss
@use "lasco" with (
    $opacity: (
        50: 5
    )
);
```

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        opacity
    )
);
```

...will disable entirely the `opacity` classes.
