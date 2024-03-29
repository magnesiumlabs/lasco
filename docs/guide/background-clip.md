---
outline: deep
---

# Background Clip

Utilities for controlling background box.

## Quick reference

| Class             | Property                        | Token     |
|-------------------|---------------------------------|-----------|
| `bg-clip-border`  | `background-clip: border-box;`  | `border`  |
| `bg-clip-content` | `background-clip: content-box;` | `content` |
| `bg-clip-padding` | `background-clip: padding-box;` | `padding` |    
| `bg-clip-text`    | `background-clip: text;`        | `text`    |

## Usage

Use the `bg-clip-{value}` class for setup background box.

```html

<div class="bg-clip-border">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-clip-padding` will be
only apply on large screens size and above.

```html

<div class="bg-clip-border lg:bg-clip-padding">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose background box utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "background--clip": (
            "content"
        )
    )
);
```
