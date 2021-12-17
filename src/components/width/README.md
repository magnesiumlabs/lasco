# Width

Class generator for setting `width` property for an element.

## Classes

### `width`

| Class      | Property        |
|------------|-----------------|
| `w-0`      | `width: 0;`     |
| `w-full`   | `width: 100%;`  |
| `w-screen` | `width: 100vw;` |

## Responsive

To control the width at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="w-0 md:w-full">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's width scales:

```scss
@use "lasco" with (
    $width: (
        25: 25%,
        50: 50%,
        75: 75%
    )
);
```

### Disabled

If you don't want to use the `width` classes in your project, you can disable them entirely by setting the `width`
property on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        width
    )
);
```
