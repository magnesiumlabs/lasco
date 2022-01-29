# Max-Height

Class generator for setting `max-height` property for an element.

## Classes

| Class          | Property             |
|----------------|----------------------|
| `max-h-0`      | `max-height: 0;`     |
| `max-h-full`   | `max-height: 100%;`  |
| `max-h-screen` | `max-height: 100vh;` |

## Breakpoints

To control the `max-height` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="max-h-0 lg:max-h-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `max-height` scales:

```scss
@use "lasco" with (
    $max-height: (
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
        max-height
    )
);
```
