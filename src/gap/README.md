# Gap

Class generator for setting `gap` property for an element.

## Usage

Use the `gap-{index}` class for setup ratio aspect.

```html

<div class="gap-0">
    <!-- ... -->
</div>
```

### Classes

| Class   | Property  |
|---------|-----------|
| `gap-0` | `gap: 0;` |

## Configuration

By default, the configuration provides a handful of general purpose gap utilities. You can easily extend the default
scales using the Sass configuration.

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

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "gap": false
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
