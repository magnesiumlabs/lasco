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

You can also filter the classes that you only want to use, the following Sass...

```scss
@use "lasco" with (
    $position: (
        fixed
    )
);
```

...will produce only the `fixed` classes.

### Disabled

The following Sass...

```scss
@use "lasco" with (
    $disabled: (
        position
    )
);
```

...will disable entirely the `position` classes.
