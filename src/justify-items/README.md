# Justify Items

Utilities for applying `justify-items` property an element.

| Class                   | Property                     |
|-------------------------|------------------------------|
| `justify-items-start`   | `justify-items: flex-start;` |
| `justify-items-end`     | `justify-items: flex-end;`   |
| `justify-items-center`  | `justify-items: center;`     |
| `justify-items-stretch` | `justify-items: stretch;`    |

## Usage

Use the `justify-items-{key}` class for set up the justify-items type.

```html

<div class="justify-items-center">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:justify-items-start` will
be only apply on large screens size and above.

```html

<div class="justify-items-center lg:justify-items-start">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `justify-items` type utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "justify-items": (
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
        "justify-items": false
    )
);
```
