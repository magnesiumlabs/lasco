---
outline: deep
---

# Content

Utilities for applying `content` to an element.

## Quick reference

| Class          | Property         |
|----------------|------------------|
| `content-none` | `content: none;` |

## Usage

Use the `content-{key}` class for setup ratio aspect.

```html

<div class="content-none">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:content-none` will be only apply
on large screens size and above.

```html

<div class="lg:content-none">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose content utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "content": (
            "icon": "'❤'"
        )
    )
);
```
