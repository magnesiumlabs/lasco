# Min-Width

Class generator for setting `min-width` property for an element.

## Classes

| Class          | Property            |
|----------------|---------------------|
| `min-w-0`      | `min-width: 0;`     |
| `min-w-full`   | `min-width: 100%;`  |
| `min-w-screen` | `min-width: 100vw;` |

## Breakpoints

To control the `min-width` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="min-w-0 lg:min-w-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `min-width` scales:

```scss
@use "lasco" with (
    $min-width: (
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
        min-width
    )
);
```
