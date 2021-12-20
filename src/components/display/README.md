# Display

Class generator for setting `display` property for an element.

## Classes

| Class          | Property                 |
|----------------|--------------------------|
| `block`        | `display: block;`        |
| `inline-block` | `display: inline-block;` |
| `flex`         | `display: flex;`         |
| `inline-flex`  | `display: inline-flex;`  |
| `grid`         | `display: grid;`         |
| `inline-grid`  | `display: inline-grid;`  |
| `table`        | `display: table;`        |
| `inline-table` | `display: inline-table;` |
| `hidden`       | `display: none;`         |

## Responsive

To control the `display` at a specific breakpoint, add a `{screen}:` prefix token to any existing class.

```html
<div class="block lg:hidden">
    <!-- ... -->
</div>
```

## Customization

### Disabled

If you don't want to use the `display` classes in your project, you can disable them entirely by setting the `display`
property on `$disabled` option:

```scss
@use "lasco" with (
    $disabled: (
        display
    )
);
```
