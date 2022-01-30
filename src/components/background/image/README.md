# Background image

Utilities for applying background image of an element.

## Usage

Use the `bg-image-{value}` class for setup background image.

```html

<div class="bg-image-none">
    <!-- ... -->
</div>
```

### Scales

| Class                  | Property                  |
|------------------------|---------------------------|
| `bg-image-none`        | `background-image: none;` |

### Configuration

By default, Lasco provides a handful of general purpose background image utilities. You can easily extend the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $bg-image: (
        hero: url('https://picsum.photos/200/300')
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-image-hero` will be only apply on large screens size and above.

```html

<div class="bg-image-none lg:bg-image-hero">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        bg-image
    )
);
```
