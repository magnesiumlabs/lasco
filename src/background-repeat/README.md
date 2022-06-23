# Background Repeat

Utilities for controlling background image repeat.

| Class             | Property                        |
|-------------------|---------------------------------|
| `bg-repeat`       | `background-repeat: repeat;`    |
| `bg-repeat-none`  | `background-repeat: no-repeat;` |
| `bg-repeat-x`     | `background-repeat: repeat-x;`  |
| `bg-repeat-y`     | `background-repeat: repeat-y;`  |
| `bg-repeat-round` | `background-repeat: round;`     |
| `bg-repeat-space` | `background-repeat: space;`     |

## Usage

Use the `bg-repeat-{style}` class for setup background image repeat.

```html

<div class="bg-repeat">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose background image repeat utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": (
            no-repeat
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-repeat-none` will be
only apply on large screens size and above.

```html

<div class="bg-repeat lg:bg-repeat-none">
    <!-- ... -->
</div>
```
