# Display

Utilities for applying display type of an element.

## Usage

Use the `{key}` class for setup the display type.

```html

<div class="block">
    <!-- ... -->
</div>
```

### Scales

| Class          | Property                 |
|----------------|--------------------------|
| `block`        | `display: block;`        |
| `inline-block` | `display: inline-block;` |
| `flex`         | `display: flex;`         |
| `inline-flex`  | `display: inline-flex;`  |
| `grid`         | `display: grid;`         |
| `inline-grid`  | `display: inline-grid;`  |
| `table`        | `display: table;`        |
| `inline-table` | `display: inline-table;` |
| `hidden`       | `display: none;`         |

### Configuration

By default, Lasco provides a handful of general purpose display type utilities. You can easily filter the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $display: (
        flex
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:hidden` will be only apply on large screens size and above.

```html

<div class="block lg:hidden">
    <!-- ... -->
</div>
```

### Disabled

If you want, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        display
    )
);
```
