---
outline: deep
---

# Justify Content

Utilities for applying `justify-content` property an element.

## Quick reference

| Class                           | Property                          | Token           |
|---------------------------------|-----------------------------------|-----------------|
| `justify-content-start`         | `justify-content: start;`         | `start`         |
| `justify-content-end`           | `justify-content: end;`           | `end`           |
| `justify-content-center`        | `justify-content: center;`        | `center`        |
| `justify-content-space-between` | `justify-content: space-between;` | `space-between` |
| `justify-content-space-around`  | `justify-content: space-around;`  | `space-around`  |
| `justify-content-space-evenly`  | `justify-content: space-evenly;`  | `space-evenly`  |
| `justify-content-stretch`       | `justify-content: stretch;`       | `stretch`       |

## Usage

Use the `justify-content-{key}` class for set up the justify-content type.

```html

<div class="justify-content-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:justify-content-start` will
be only apply on large screens size and above.

```html

<div class="justify-content-center lg:justify-content-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `justify-content` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "justify-content": (
            "center"
        )
    )
);
```
