# Position

Class generator for setting `position` property for an element.

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="absolute">
    <!-- ... -->
</div>
```

### Scales

| Class      | Property              |
|------------|-----------------------|
| `absolute` | `position: absolute;` |
| `fixed`    | `position: fixed;`    |
| `relative` | `position: relative;` |
| `static`   | `position: static;`   |
| `sticky`   | `position: sticky;`   |

## Configuration

First, allow `position` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "position": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose position utilities. You can easily filter the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "position": (
            fixed
        )
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:relative` will be only apply on large screens size and above.

```html

<div class="absolute lg:relative">
    <!-- ... -->
</div>
```