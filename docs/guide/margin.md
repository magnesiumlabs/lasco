---
outline: deep
---

# Margin

Class generator for setting `margin` property for an element.

## Quick reference

| Class     | Property                                 |
|-----------|------------------------------------------|
| `m-0`     | `margin: 0;`                             |
| `mx-0`    | `margin-left: 0; margin-right: 0;`       |
| `my-0`    | `margin-top: 0; margin-bottom: 0;`       |
| `mt-0`    | `margin-top: 0;`                         |
| `mr-0`    | `margin-right: 0;`                       |
| `mb-0`    | `margin-bottom: 0;`                      |
| `ml-0`    | `margin-left: 0;`                        |
| `m-auto`  | `margin: auto;`                          |
| `mx-auto` | `margin-left: auto; margin-right: auto;` |
| `my-auto` | `margin-top: auto; margin-bottom: auto;` |
| `mt-auto` | `margin-top: auto;`                      |
| `mr-auto` | `margin-right: auto;`                    |
| `mb-auto` | `margin-bottom: auto;`                   |
| `ml-auto` | `margin-left: auto;`                     |

## Usage

### Add margin on single side

Control the margin on single side of an element using the `m{t|r|b|l}-{index}` class utilities.

```html

<div class="ml-0">
    <!-- ... -->
</div>
```

### Add margin on horizontal side

Control the horizontal margin of an element using the `mx-{index}` class utilities.

```html

<div class="mx-0">
    <!-- ... -->
</div>
```

### Add margin on vertical side

Control the vertical margin of an element using the `my-{index}` class utilities.

```html

<div class="my-0">
    <!-- ... -->
</div>
```

### Add margin on all sides

Control the margin on all side of an element using the `m-{index}` class utilities.

```html

<div class="m-0">
    <!-- ... -->
</div>
```

## Applying conditionally

### Breakpoints and media queries

You can also control the responsive breakpoint with variant class modifiers. For example `lg:ml-auto` will be only apply
on large screens size and above.

```html

<div class="m-0 lg:ml-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend your theme

By default, the configuration provides a handful of general purpose `margin` utilities. You can easily extend the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "margin": (
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
        "margin": true
    )
);
```
