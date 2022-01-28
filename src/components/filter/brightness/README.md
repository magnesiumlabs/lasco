# Brightness

Class generator for setting `brightness` filter property for an element.

## Classes

| Class            | Property                 |
|------------------|--------------------------|
| `brightness-0`   | `filter: brightness(0);` |

## Breakpoints

To control the `brightness` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="brightness-0">
    <!-- ... -->
</div>
```

## Customization

### Extend

You can easily extend the Lasco's `brightness` scales:

```scss
@use "lasco" with (
    $brightness: (
        50: 0.5
    )
);
```

> **Note:** the amount can be a number _(0 to 1)_ or a percentage value. _(Source [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/filter-function/brightness()#exemples))_

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        brightness
    )
);
```

...will disable entirely the `brightness` classes.
