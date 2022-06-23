# Width

Class generator for setting `width` property for an element.

| Class      | Property        |
|------------|-----------------|
| `w-0`      | `width: 0;`     |
| `w-full`   | `width: 100%;`  |
| `w-screen` | `width: 100vw;` |

## Usage

Use the `w-{index}` class for setup ratio aspect.

```html

<div class="w-0">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose `width` utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "width": (
            25: 25%,
            50: 50%,
            75: 75%
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "width": true
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:w-full` will be only apply
on large screens size and above.

```html

<div class="w-0 lg:w-full">
    <!-- ... -->
</div>
```
