# Z-Index

Class generator for setting `z-index` property for an element.

## Classes

| Class    | Property         |
|----------|------------------|
| `z-0`    | `z-index: 0;`    |
| `z-auto` | `z-index: auto;` |

## Breakpoints

To control the `z-index` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="z-0 lg:z-auto">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `z-index` scales:

```scss
@use "lasco" with (
    $z-index: (
        10: 10
    )
);
```

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        z-index
    )
);
```

...will disable entirely the `z-index` classes.
