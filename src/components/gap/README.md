# Gap

Class generator for setting `gap` property for an element.

## Classes

| Class   | Property  |
|---------|-----------|
| `gap-0` | `gap: 0;` |

## Responsive

To control the gap at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="gap-0 md:gap-24">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's gap scales:

```scss
@use "lasco" with (
    $gap: (
        12: 12px,
        24: 24px,
        "x-12": 12px,
        "y-24": 24px
    )
);
```

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        gap
    )
);
```

...will disable entirely the `gap` classes.
