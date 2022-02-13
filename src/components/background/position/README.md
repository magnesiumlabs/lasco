# Background position

Utilities for applying background position of an element.

## Usage

Use the `bg-position-{position}` class for setup background position.

```html

<div class="bg-position-top">
    <!-- ... -->
</div>
```

### Scales

| Class                | Property                       |
|----------------------|--------------------------------|
| `bg-position-bottom` | `background-position: bottom;` |
| `bg-position-center` | `background-position: center;` |
| `bg-position-left`   | `background-position: left;`   |
| `bg-position-right`  | `background-position: right;`  |
| `bg-position-top`    | `background-position: top;`    |

## Configuration

First, allow `background-position` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-position": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose background position utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-position": (
            "left-top": "left top"
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-position-bottom` will be only apply on large screens size and above.

```html

<div class="bg-position-top lg:bg-position-bottom">
    <!-- ... -->
</div>
```
