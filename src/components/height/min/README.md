# Min-Height

Class generator for setting `min-height` property for an element.

## Classes

| Class          | Property             |
|----------------|----------------------|
| `min-h-0`      | `min-height: 0;`     |
| `min-h-full`   | `min-height: 100%;`  |
| `min-h-screen` | `min-height: 100vh;` |

## Responsive

To control the `min-height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="min-h-0 md:min-h-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `min-height` scales:

```scss
@use "lasco" with (
    $min-height: (
        25: 25%,
        50: 50%,
        75: 75%
    )
);
```

### Disabled

If you don't want to use the `min-height` classes in your project, you can disable them entirely by setting
the `min-height` property on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        min-height
    )
);
```