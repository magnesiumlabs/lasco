# Background Clip

Utilities for controlling background box.

## Usage

Use the `bg-clip-{value}` class for setup background box.

```html

<div class="bg-clip-border">
    <!-- ... -->
</div>
```

### Classes

| Class             | Property                        |
|-------------------|---------------------------------|
| `bg-clip-border`  | `background-clip: border-box;`  |
| `bg-clip-content` | `background-clip: content-box;` |
| `bg-clip-padding` | `background-clip: padding-box;` |    
| `bg-clip-text`    | `background-clip: text;`        |    

## Configuration

By default, the configuration provides a handful of general purpose background box utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-clip": (
            content
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "bg-clip": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also use variant modifiers to target breakpoints with `{screen}:` prefix token to any existing class. For
example `lg:bg-clip-padding` will be only apply on large screens size and above.

```html

<div class="bg-clip-border lg:bg-clip-padding">
    <!-- ... -->
</div>
```