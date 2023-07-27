---
outline: deep
---

# Migration

## From 2.7 to 3.0

### The `list` option

The `list` option has been removed and some functionalities hare transferred on `core` option.

### The `core` option

The `core` option replace `extend` and `list` options for disabled each property you don't need:

**Before**

```scss
@use "lasco" with (
    $extend: (
        "display": false,
        "grayscale": false,
        "margin": false
    )
);
```

**After**

```scss
@use "lasco" with (
    $core: (
        "display": false,
        "grayscale": false,
        "margin": false
    )
);
```

Same for the safelist:

**Before**

```scss
@use "lasco" with (
    $extend: (
        "display"
        "grayscale"
        "margin"
    )
);
```

**After**

```scss
@use "lasco" with (
    $core: (
        "display"
        "grayscale"
        "margin"
    )
);
```

::: warning
The `extend` option only manage to extend default property configuration now.
:::
