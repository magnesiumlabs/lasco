---
outline: deep
---

# Configuration

Without any configuration, all classes will be generated. To customize your site, use `$engine` and `$extend` options
for customize your theme.

## `$engine`

Option for globally configure the framework.

```scss
@use "lasco" with (
    $engine: (
        // ...
    )
);
```

### `screens`

Sets breakpoint classes generator. This is based on [@unsass/breakpoint](https://github.com/unsass/breakpoint)
dependency.

```scss
@use "lasco" with (
    $engine: (
        "screens": (
           "lg": "1024px"        
        )
    )
);
```

### `list`

Sets list engine _(black or white)_ for generate classes. This method provide only properties set at `true` or with
valued map. Default `"black"`.

```scss
@use "lasco" with (
    $engine: (
        "list": "white" // default: "black"
    )
);
```

#### White list with extended properties

If you only want the `display` and `position: absolute` classes, you can set `"list": "white"` option on `$engine` and
configure the `$extend` like that:

```scss
@use "lasco" with (
    $engine: (
        "list": "white"
    ),
    $extend: (
        "display": true,
        "position": (
            absolute
        )
    )
);
```

## `$extend`

Option for extend each property.

```scss
@use "lasco" with (
    $extend: (
        // ...
    )
);
```

### `property`

See each property documentation for see how extend it.
