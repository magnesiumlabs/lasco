# Background clip

Utilities for controlling background box.

## Usage

Use the `bg-clip-{value}` class for setup background box.

```html

<div class="bg-clip-border">
    <!-- ... -->
</div>
```

### Scales

| Class             | Property                        |
|-------------------|---------------------------------|
| `bg-clip-border`  | `background-clip: border-box;`  |
| `bg-clip-content` | `background-clip: content-box;` |
| `bg-clip-padding` | `background-clip: padding-box;` |    
| `bg-clip-text`    | `background-clip: text;`        |    

### Configuration

By default, Lasco provides a handful of general purpose background box utilities. You can easily filter the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $bg-clip: (
        content
    )
);
```

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-clip-padding` will be only apply on large screens size and above.

```html

<div class="bg-clip-border lg:bg-clip-padding">
    <!-- ... -->
</div>
```

### Disabled

If you needed, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        bg-clip
    )
);
```
