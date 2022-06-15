# Opacity

Class generator for setting `opacity` property for an element.

## Usage

Use the `opacity-{index}` class for setup ratio aspect.

```html

<div class="opacity-0">
    <!-- ... -->
</div>
```

### Classes

| Class         | Property      |
|---------------|---------------|
| `opacity-0`   | `opacity: 0;` |
| `opacity-100` | `opacity: 1;` |

## Configuration

First, allow `opacity` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "opacity": true
    )
);
```

### Extend

By default, the configuration provides a handful of general purpose opacity utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "opacity": (
            50: 0.5
        )
    )
);
```

## Applying conditionally

### Breakpoints

To control the `opacity` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="opacity-0 lg:opacity-100">
    <!-- ... -->
</div>
```
