# Height

Class generator for setting `height` property for an element.

## Classes

### `height`

| Class      | Property         |
|------------|------------------|
| `h-0`      | `height: 0;`     |
| `h-full`   | `height: 100%;`  |
| `h-screen` | `height: 100vh;` |

### `min-height`

| Class          | Property             |
|----------------|----------------------|
| `min-h-0`      | `min-height: 0;`     |
| `min-h-full`   | `min-height: 100%;`  |
| `min-h-screen` | `min-height: 100vh;` |

### `max-height`

| Class          | Property             |
|----------------|----------------------|
| `max-h-0`      | `max-height: 0;`     |
| `max-h-full`   | `max-height: 100%;`  |
| `max-h-screen` | `max-height: 100vh;` |

## Responsive

To control the height at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="h-0 md:h-full">
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
    ),
    $min-height: (
        // etc...
    ),
    $max-height: (
        // etc...
    )
);
```

### Disabled

If you don't want to use the `height` classes in your project, you can disable them entirely by setting the `height`
properties on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        height,
        min-height,
        max-height
    )
);
```
