# Position

Class generator for setting `position` property for an element.

## Classes

| Class      | Property              |
|------------|-----------------------|
| `absolute` | `position: absolute;` |
| `fixed`    | `position: fixed;`    |
| `relative` | `position: relative;` |
| `static`   | `position: static;`   |
| `sticky`   | `position: sticky;`   |

## Breakpoints

To control the `position` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html

<div class="sticky lg:absolute">
    <!-- ... -->
</div>
```

## Customization

### Filter

By default, Lasco provides a handful of general purpose position utilities. You can easily extend the default scales
using the Sass configuration.

```scss
@use "lasco" with (
    $position: (
        fixed
    )
);
```

...will produce only the `fixed` classes.

### Disabled

If you want, you can easily disable this utility with `$disabled` option.

```scss
@use "lasco" with (
    $disabled: (
        position
    )
);
```
