# place-items

Utilities for applying `place-items` property an element.

## Usage

Use the `place-items-{key}` class for set up the place-items type.

```html

<div class="place-items-center">
    <!-- ... -->
</div>
```

### Classes

| Class                  | Property                   |
|------------------------|----------------------------|
| `place-items-start`    | `place-items: flex-start;` |
| `place-items-end`      | `place-items: flex-end;`   |
| `place-items-center`   | `place-items: center;`     |
| `place-items-stretch`  | `place-items: stretch;`    |

## Configuration

By default, the configuration provides a handful of general purpose place-items type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-items": (
            center
        )
    )
);
```

### Disabled

If you don't need the `place-items` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "place-items": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:place-items-start` will be only apply on large screens size and above.

```html

<div class="place-items-center lg:place-items-start">
    <!-- ... -->
</div>
```