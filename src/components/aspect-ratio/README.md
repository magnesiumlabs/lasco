# Aspect-ratio

Class generator for setting `aspect-ratio` property for an element.

## Classes

| Class    | Property             |
|----------|----------------------|
| `auto`   | `aspect-ratio: auto` |
| `square` | `aspect-ratio: 1/1`  |
| `video`  | `aspect-ratio: 16/9` |

## Responsive

To control the `aspect-ratio` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="aspect-auto lg:aspect-video">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's width scales:

```scss
@use "lasco" with (
    $aspect-ratio: (
        "4/3": "4/3"
    )
);
```

### Disabled

If you don't want to use the `aspect-ratio` classes in your project, you can disable them entirely by setting
the `aspect-ratio` property on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        aspect-ratio
    )
);
```