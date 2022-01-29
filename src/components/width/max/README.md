# Max-Width

Class generator for setting `max-width` property for an element.

## Classes

| Class          | Property            |
|----------------|---------------------|
| `max-w-0`      | `max-width: 0;`     |
| `max-w-full`   | `max-width: 100%;`  |
| `max-w-screen` | `max-width: 100vw;` |

## Breakpoints

To control the `max-width` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="max-w-0 lg:max-w-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `max-width` scales:

```scss
@use "lasco" with (
    $max-width: (
        25: 25%,
        50: 50%,
        75: 75%
    )
);
```

### Disabled

If you want, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        max-width
    )
);
```
