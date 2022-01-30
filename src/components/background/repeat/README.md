# Background repeat

Utilities for controlling background image repeat.

## Usage

Use the `bg-repeat-{style}` class for setup background image repeat.

```html

<div class="bg-repeat">
    <!-- ... -->
</div>
```

### Scales

| Class             | Property                        |
|-------------------|---------------------------------|
| `bg-repeat`       | `background-repeat: repeat;`    |
| `bg-no-repeat`    | `background-repeat: no-repeat;` |
| `bg-repeat-x`     | `background-repeat: repeat-x;`  |
| `bg-repeat-y`     | `background-repeat: repeat-y;`  |
| `bg-repeat-round` | `background-repeat: round;`     |
| `bg-repeat-space` | `background-repeat: space;`     |

### Configuration

By default, Lasco provides a handful of general purpose background image repeat utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $bg-repeat: (
        no-repeat
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-no-repeat` will be only apply on large screens size and above.

```html

<div class="bg-repeat lg:bg-no-repeat">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        bg-repeat
    )
);
```
