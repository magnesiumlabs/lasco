# Place Items

Utilities for applying `place-items` property an element.

| Class                  | Property                   |
|------------------------|----------------------------|
| `place-items-start`    | `place-items: flex-start;` |
| `place-items-end`      | `place-items: flex-end;`   |
| `place-items-center`   | `place-items: center;`     |
| `place-items-stretch`  | `place-items: stretch;`    |

## Usage

Use the `place-items-{key}` class for set up the place-items type.

```html

<div class="place-items-center">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose `place-items` type utilities. You can easily filter
the default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-items": (
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
        "place-items": false
    )
);
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:place-items-start` will be
only apply on large screens size and above.

```html

<div class="place-items-center lg:place-items-start">
    <!-- ... -->
</div>
```
