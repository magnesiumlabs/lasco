# Aspect-ratio

Utilities for applying ratio aspect of an element.

## Usage

Use the `aspect-{index}` class for setup ratio aspect.

```html

<div class="aspect-square">
    <!-- ... -->
</div>
```

### Scales

| Class           | Property             |
|-----------------|----------------------|
| `aspect-auto`   | `aspect-ratio: auto` |
| `aspect-square` | `aspect-ratio: 1/1`  |
| `aspect-video`  | `aspect-ratio: 16/9` |

### Configuration

First, allow `aspect-ratio` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "aspect-ratio": true
    )
);
```

#### Customization

By default, Lasco provides a handful of general purpose ratio aspect utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "aspect-ratio": (
            "4/3": "4/3"
        )
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:aspect-video` will be only apply on large screens size and above.

```html

<div class="aspect-auto lg:aspect-video">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        aspect-ratio
    )
);
```
