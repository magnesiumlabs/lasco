# Place Self

Utilities for applying `place-self` property an element.

## Usage

Use the `place-self-{key}` class for set up the place-self type.

```html

<div class="place-self-center">
    <!-- ... -->
</div>
```

### Classes

| Class                 | Property               |
|-----------------------|------------------------|
| `place-self-auto`     | `place-self: auto;`    |
| `place-self-start`    | `place-self: start;`   |
| `place-self-end`      | `place-self: end;`     |
| `place-self-center`   | `place-self: center;`  |
| `place-self-stretch`  | `place-self: stretch;` |

## Configuration

By default, the configuration provides a handful of general purpose place-self type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "place-self": (
            center
        )
    )
);
```

### Disabled

If you don't need the `place-self` classes, you can disable them by setting the option to `false`.

```scss
@use "lasco" with (
    $extend: (
        "place-self": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:place-self-start` will be only apply on large screens size and above.

```html

<div class="place-self-center lg:place-self-start">
    <!-- ... -->
</div>
```
