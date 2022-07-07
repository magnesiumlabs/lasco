# Position

Class generator for setting `position` property for an element.

| Class      | Property              |
|------------|-----------------------|
| `absolute` | `position: absolute;` |
| `fixed`    | `position: fixed;`    |
| `relative` | `position: relative;` |
| `static`   | `position: static;`   |
| `sticky`   | `position: sticky;`   |

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="absolute">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:relative` will be only
apply on large screens size and above.

```html

<div class="absolute lg:relative">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose position utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "position": (
            fixed
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "position": false
    )
);
```
