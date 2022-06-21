# Background Attachment

Utilities for applying background image's position on scroll.

## Usage

Use the `bg-attachment-{value}` class for setup background image's position.

```html

<div class="bg-attachment-fixed">
    <!-- ... -->
</div>
```

### Classes

| Class                  | Property                         |
|------------------------|----------------------------------|
| `bg-attachment-local`  | `background-attachment: local;`  |
| `bg-attachment-fixed`  | `background-attachment: fixed;`  |
| `bg-attachment-scroll` | `background-attachment: scroll;` |

## Configuration

By default, the configuration provides a handful of general purpose background image's position utilities. You can
easily filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-attachment": (
            fixed
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "bg-attachment": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-attachment-scroll` will
be only apply on large screens size and above.

```html

<div class="bg-attachment-fixed lg:bg-attachment-scroll">
    <!-- ... -->
</div>
```
