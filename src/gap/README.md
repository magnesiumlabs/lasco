# Gap

Class generator for setting `gap` property for an element.

| Class     | Property         |
|-----------|------------------|
| `gap-0`   | `gap: 0;`        |
| `gap-x-0` | `column-gap: 0;` |
| `gap-y-0` | `row-gap: 0;`    |

## Usage

### Setting the gap on element

Use the `gap-{key}` to change gap between element.

```html

<div class="gap-0">
    <!-- ... -->
</div>
```

### Setting row and column gaps independently

Use the `gap-x-{key}` or `gap-y-{key}` to change gap between element.

```html

<div class="gap-x-6 gap-y-12">
    <!-- ... -->
</div>
```

## Configuration

By default, the configuration provides a handful of general purpose `gap` type utilities. You can easily filter the
default scales using the Sass configuration.

```scss
@use "lasco" with (
    $extend: (
        "gap": (
            12: 12px,
            24: 24px
        )
    )
);
```

### Disabled

```scss
@use "lasco" with (
    $extend: (
        "gap": false
    )
);
```

## Applying conditionally

### Breakpoints

You can also control the responsive breakpoint with variant class modifiers. For example `lg:gap-24` will be only apply
on large screens size and above.

```html

<div class="gap-0 lg:gap-24">
    <!-- ... -->
</div>
```
