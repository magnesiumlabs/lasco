# Height

Class generator for setting `height` property for an element.

## Classes

### `height`

| Class      | Property         |
|------------|------------------|
| `h-0`      | `height: 0;`     |
| `h-full`   | `height: 100%;`  |
| `h-screen` | `height: 100vh;` |

## Breakpoints

To control the `height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="h-0 lg:h-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's height scales:

```scss
@use "lasco" with (
    $height: (
        25: 25%,
        50: 50%,
        75: 75%
    )
);
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        height
    )
);
```
