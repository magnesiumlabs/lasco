# Gap

Class generator for setting `gap` property for an element.

## Classes

| Class   | Property  |
|---------|-----------|
| `gap-0` | `gap: 0;` |

## Breakpoints

To control the gap at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="gap-0 lg:gap-24">
    <!-- ... -->
</div>
```

### Configuration

First, allow `aspect-ratio` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "gap": true
    )
);
```

#### Extend

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
