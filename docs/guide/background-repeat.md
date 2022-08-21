---
outline: deep
---

# Background Repeat

Utilities for controlling background image repeat.

## Quick reference

| Class             | Property                        | Token          |
|-------------------|---------------------------------|----------------|
| `bg-repeat`       | `background-repeat: repeat;`    | `repeat`       |
| `bg-repeat-none`  | `background-repeat: no-repeat;` | `repeat-none`  |
| `bg-repeat-x`     | `background-repeat: repeat-x;`  | `repeat-x`     |
| `bg-repeat-y`     | `background-repeat: repeat-y;`  | `repeat-y`     |
| `bg-repeat-round` | `background-repeat: round;`     | `repeat-round` |
| `bg-repeat-space` | `background-repeat: space;`     | `repeat-space` |

## Usage

Use the `bg-repeat-{style}` class for setup background image repeat.

```html

<div class="bg-repeat">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-repeat-none` will be
only apply on large screens size and above.

```html

<div class="bg-repeat lg:bg-repeat-none">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose background image repeat utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": (
            "no-repeat"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "bg-repeat": false
    )
);
```
