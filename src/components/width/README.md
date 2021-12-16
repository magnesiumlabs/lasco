# Width

Class generator for setting `width` property for an element.

## Classes

### `width`

| Class      | Property        |
|------------|-----------------|
| `w-0`      | `width: 0;`     |
| `w-full`   | `width: 100%;`  |
| `w-screen` | `width: 100vw;` |

### `min-width`

| Class          | Property            |
|----------------|---------------------|
| `min-w-0`      | `min-width: 0;`     |
| `min-w-full`   | `min-width: 100%;`  |
| `min-w-screen` | `min-width: 100vw;` |

### `max-width`

| Class          | Property            |
|----------------|---------------------|
| `max-w-0`      | `max-width: 0;`     |
| `max-w-full`   | `max-width: 100%;`  |
| `max-w-screen` | `max-width: 100vw;` |

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
    ),
    $min-width: (
        // etc...
    ),
    $max-width: (
        // etc...
    )
);
```

### Disabled

If you don't want to use the `width` classes in your project, you can disable them entirely by setting the `width`
properties on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        width
        min-width,
        max-width
    )
);
```
