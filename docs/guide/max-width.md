---
outline: deep
---

# Max Width

Class generator for setting `max-width` property for an element.

## Quick reference

| Class              | Property                  |
|--------------------|---------------------------|
| `max-w-0`          | `max-width: 0;`           |
| `max-w-none`       | `max-width: none;`        |
| `max-w-full`       | `max-width: 100%;`        |
| `max-w-screen`     | `max-width: 100vw;`       |
| `max-w-min`        | `max-width: min-content;` |
| `max-w-max`        | `max-width: max-content;` |
| `max-w-fit`        | `max-width: fit-content;` |
| `max-w-screen-xs`  | `max-width: 320px;`       |
| `max-w-screen-sm`  | `max-width: 480px;`       |
| `max-w-screen-md`  | `max-width: 768px;`       |
| `max-w-screen-lg`  | `max-width: 960px;`       |
| `max-w-screen-xl`  | `max-width: 1200px;`      |
| `max-w-screen-2xl` | `max-width: 1400px;`      |

## Usage

Use the `max-w-{index}` class for setup ratio aspect.

```html

<div class="max-w-0">
    <!-- ... -->
</div>
```

### Screens classes

The `max-w-screen-{index}` classes are automatically generate from screens configuration.

```html

<div class="max-w-screen-lg">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:max-w-full` will be only
apply on large screens size and above.

```html

<div class="max-w-0 lg:max-w-full">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `max-width` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "max-width": (
            "25": "25%",
            "50": "50%",
            "75": "75%"
        )
    )
);
```
