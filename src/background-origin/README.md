# Background Origin

Utilities for controlling background box origin.

| Class               | Property                          |
|---------------------|-----------------------------------|
| `bg-origin-border`  | `background-origin: border-box;`  |
| `bg-origin-content` | `background-origin: content-box;` |
| `bg-origin-padding` | `background-origin: padding-box;` |  

## Usage

Use the `bg-origin-{value}` class for setup background box origin.

```html

<div class="bg-origin-border">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose background box origin utilities. You can easily
filter the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-origin": (
            content-box
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "bg-origin": false
    )
);
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:bg-origin-padding` will be
only apply on large screens size and above.

```html

<div class="bg-origin-border lg:bg-origin-padding">
    <!-- ... -->
</div>
```
