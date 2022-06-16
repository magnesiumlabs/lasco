# flex-direction

Utilities for applying flex-direction type of element.

## Usage

Use the `{key}` class for set up the flex-direction type.

```html

<div class="flex-row">
    <!-- ... -->
</div>
```

### Classes

| Class                 | Property                          |
|-----------------------|-----------------------------------|
| `flex-row`            | `flex-direction: row;`            |
| `flex-row-reverse`    | `flex-direction: row-reverse;`    |
| `flex-column`         | `flex-direction: column;`         |
| `flex-column-reverse` | `flex-direction: column-reverse;` |

## Configuration

By default, the configuration provides a handful of general purpose `flex-direction` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "flex-direction": (
            column
        )
    )
);
```

### Disabled

If you don't need the `flex-direction` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "flex-direction": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:flex-column` will be only apply on large screens size and above.

```html

<div class="flex-row lg:flex-column">
    <!-- ... -->
</div>
```
