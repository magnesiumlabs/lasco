# Display
# Display

Utilities for applying display type of element.

## Usage

Use the `{key}` class for setup the diplsay type.

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

By default, Lasco provides some `{key}` utilities. You can easily filter the default scales using the Sass
configuration, the following Sass...

```scss
@use "lasco" with (
    $display: (
        flex
    )
);
```

...will produce only the `flex` classes.

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:hidden` will be only apply on large screens size and above.

```html
<div class="block lg:hidden">
    <!-- ... -->
</div>
```

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        display
    )
);
```

...will disable entirely the `display` classes.
