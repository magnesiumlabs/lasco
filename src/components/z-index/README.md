# Z-Index

Utilities for applying position order of an element.

## Usage

Use the `z-{index}` class for setup order position.

```html

<div class="z-0">
    <!-- ... -->
</div>
```

### Scales

| Class    | Property         |
|----------|------------------|
| `z-0`    | `z-index: 0;`    |
| `z-auto` | `z-index: auto;` |

### Configuration

By default, Lasco provides a handful of general purpose position order utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $z-index: (
        10: 10
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:z-auto` will be only apply on large screens size and above.

```html

<div class="z-0 lg:z-auto">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        z-index
    )
);
```
