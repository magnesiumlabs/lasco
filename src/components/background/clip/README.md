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

## Configuration

First, allow `background-clip` classes to be generated.

```scss
@use "lasco" with (
    $extend: (
        "bg-clip": true
    )
);
```

### Extend

By default, Lasco provides a handful of general purpose background box utilities. You can easily filter the default
scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "bg-clip": (
            content
        )
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
