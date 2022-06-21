# Background Position

Utilities for applying `background-position` to an element.

## Usage

Use the `bg-position-{position}` class for setup background position.

```html

<div class="bg-position-top">
    <!-- ... -->
</div>
```

### Classes

| Class                | Property                       |
|----------------------|--------------------------------|
| `bg-position-bottom` | `background-position: bottom;` |
| `bg-position-center` | `background-position: center;` |
| `bg-position-left`   | `background-position: left;`   |
| `bg-position-right`  | `background-position: right;`  |
| `bg-position-top`    | `background-position: top;`    |

## Configuration

By default, the configuration provides a handful of general purpose background position utilities. You can easily extend
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-position": (
            "left-top": "left top"
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "bg-position": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-position-bottom` will be
only apply on large screens size and above.

```html

<div class="bg-position-top lg:bg-position-bottom">
    <!-- ... -->
</div>
```
