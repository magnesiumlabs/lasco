---
outline: deep
---

# Padding

Class generator for setting `padding` property for an element.

## Quick reference

| Class  | Property                             |
|--------|--------------------------------------|
| `p-0`  | `padding: 0;`                        |
| `px-0` | `padding-left: 0; padding-right: 0;` |
| `py-0` | `padding-top: 0; padding-bottom: 0;` |
| `pt-0` | `padding-top: 0;`                    |
| `pr-0` | `padding-right: 0;`                  |
| `pb-0` | `padding-bottom: 0;`                 |
| `pl-0` | `padding-left: 0;`                   |

## Usage

### Add padding on single side

Control the padding on single side of an element using the `p{t|r|b|l}-{index}` class utilities.

```html

<div class="pl-0">
    <!-- ... -->
</div>
```

### Add padding on horizontal side

Control the horizontal padding of an element using the `px-{index}` class utilities.

```html

<div class="px-0">
    <!-- ... -->
</div>
```

### Add padding on vertical side

Control the vertical padding of an element using the `py-{index}` class utilities.

```html

<div class="py-0">
    <!-- ... -->
</div>
```

### Add padding on all sides

Control the padding on all side of an element using the `p-{index}` class utilities.

```html

<div class="p-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:pl-6` will be only apply
on large screens size and above.

```html

<div class="p-0 lg:pl-6">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `padding` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "padding": (
            "6": "6px"
        )
    )
);
```

### Disabled

You can easily disable the properties you don't need to use.

```scss
@use "lasco" with (
    $extend: (
        "padding": true
    )
);
```
