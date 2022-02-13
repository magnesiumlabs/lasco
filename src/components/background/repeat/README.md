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
| `bg-repeat-none`  | `background-repeat: no-repeat;` |
| `bg-repeat-x`     | `background-repeat: repeat-x;`  |
| `bg-repeat-y`     | `background-repeat: repeat-y;`  |
| `bg-repeat-round` | `background-repeat: round;`     |
| `bg-repeat-space` | `background-repeat: space;`     |

## Configuration

First, allow `background-repeat` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose background image repeat utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": (
            no-repeat
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-repeat-none` will be only apply on large screens size and above.

```html

<div class="bg-repeat lg:bg-repeat-none">
    <!-- ... -->
</div>
```
