# Background attachment

Utilities for applying background image's position on scroll.

## Usage

Use the `bg-attachment-{values}` class for setup ratio aspect.

```html

<div class="bg-attachment-fixed">
    <!-- ... -->
</div>
```

### Scales

| Class                  | Property                         |
|------------------------|----------------------------------|
| `bg-attachment-local`  | `background-attachment: local;`  |
| `bg-attachment-fixed`  | `background-attachment: fixed;`  |
| `bg-attachment-scroll` | `background-attachment: scroll;` |

### Configuration

By default, Lasco provides a handful of general purpose background image's position utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $bg-attachment: (
        fixed
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-attachment-scroll` will be only apply on large screens size and above.

```html

<div class="bg-attachment-fixed lg:bg-attachment-scroll">
    <!-- ... -->
</div>
```

### Disabled

If you want, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        bg-attachment
    )
);
```
