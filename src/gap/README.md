# Gap

Class generator for setting `gap` property for an element.

## Usage

Use the `gap-{index}` class for setup ratio aspect.

```html

<div class="gap-0">
    <!-- ... -->
</div>
```

### Scales

| Class   | Property  |
|---------|-----------|
| `gap-0` | `gap: 0;` |

## Configuration

First, allow `gap` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "gap": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose gap utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "gap": (
            12: 12px,
            24: 24px,
            "x-12": 12px,
            "y-24": 24px
        )
    )
);
```

## Applying conditionally

### Breakpoints

To control the gap at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="gap-0 lg:gap-24">
    <!-- ... -->
</div>
```
