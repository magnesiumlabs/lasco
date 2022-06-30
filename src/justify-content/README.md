# Justify Content

Utilities for applying `justify-content` property an element.

| Class                     | Property                          |
|---------------------------|-----------------------------------|
| `justify-content-start`   | `justify-content: flex-start;`    |
| `justify-content-end`     | `justify-content: flex-end;`      |
| `justify-content-center`  | `justify-content: center;`        |
| `justify-content-between` | `justify-content: space-between;` |
| `justify-content-around`  | `justify-content: space-around;`  |
| `justify-content-evenly`  | `justify-content: space-evenly;`  |
| `justify-content-stretch` | `justify-content: stretch;`       |

## Usage

Use the `justify-content-{key}` class for set up the justify-content type.

```html

<div class="justify-content-center">
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
            center
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "justify-content": false
    )
);
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
