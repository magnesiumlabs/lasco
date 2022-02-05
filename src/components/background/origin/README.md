# Background origin

Utilities for controlling background box origin.

## Usage

Use the `bg-origin-{value}` class for setup background box origin.

```html

<div class="bg-origin-border">
    <!-- ... -->
</div>
```

### Scales

| Class               | Property                          |
|---------------------|-----------------------------------|
| `bg-origin-border`  | `background-origin: border-box;`  |
| `bg-origin-content` | `background-origin: content-box;` |
| `bg-origin-padding` | `background-origin: padding-box;` |    

### Configuration

By default, Lasco provides a handful of general purpose background box origin utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $bg-origin: (
        content
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-origin-padding` will be only apply on large screens size and above.

```html

<div class="bg-origin-border lg:bg-origin-padding">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        bg-origin
    )
);
```