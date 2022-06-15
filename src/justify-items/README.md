# justify-items

Utilities for applying `justify-items` property an element.

## Usage

Use the `justify-items-{key}` class for set up the justify-items type.

```html

<div class="justify-items-center">
    <!-- ... -->
</div>
```

### Classes

| Class                   | Property                     |
|-------------------------|------------------------------|
| `justify-items-start`   | `justify-items: flex-start;` |
| `justify-items-end`     | `justify-items: flex-end;`   |
| `justify-items-center`  | `justify-items: center;`     |
| `justify-items-stretch` | `justify-items: stretch;`    |

## Configuration

By default, the configuration provides a handful of general purpose justify-items type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "justify-items": (
            center
        )
    )
);
```

### Disabled

If you don't need the `justify-items` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "justify-items": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:justify-items-start` will be only apply on large screens size and above.

```html

<div class="justify-items-center lg:justify-items-start">
    <!-- ... -->
</div>
```