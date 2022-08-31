---
outline: deep
---

# Configuration

Without any configuration, all Lasco classes will be generated. To customize your theme, you can use many options
describe below.

## Engine Configuration

The `$engine` section is where you configure Lasco global behavior, like media queries breakpoints or list authority.

### Configuring media queries

The `screens` key allow to set token rules for media queries.

```scss
@use "lasco" with (
    $engine: (
        "screens": (
           "lg": "1024px"        
        )
    )
);
```

#### Media queries

| Token | Value    |
|-------|----------|
| `xs`  | `360px`  |
| `sm`  | `480px`  |
| `md`  | `768px`  |
| `lg`  | `960px`  |
| `xl`  | `1200px` |
| `2xl` | `1400px` |

::: info Breakpoint
This option is based and use [@unsass/breakpoint](https://github.com/unsass/breakpoint) dependency.
:::

### Configuring list authority

The `list` key allow to manage the list authority, `black` _(default)_ or `white`.

```scss
@use "lasco" with (
    $engine: (
        "list": "white"
    )
);
```

::: warning White List
This `white` configuration provide only properties set at `true` or with valued map.
:::

#### White list

If you want only the `display` and `position: absolute` declarations, you can set `"list": "white"` option and configure
the wanted properties.

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

## Extend Configuration

### Configuring properties

Each property have their own key for extend each default configuration.

```scss
@use "lasco" with (
    $extend: (
        "display": (
            flex
        )
    )
);
```

## Configuration options

### Prefix

The `$prefix` allow to generate all classes with custom prefix. For example, you could set the `$prefix` option to `ls`
like that:

```scss
@use "lasco" with (
    $prefix: "ls"
);
```

Now every class will be generated with the configured prefix:

```css
.ls-block {
    display: block;
}

.ls-flex {
    display: flex;
}

.ls-grid {
    display: grid;
}
```

### Important

The `$important` allow to generate all classes with `!important` rule. For example, you could set the `$important`
option to `true` like that:

```scss
@use "lasco" with (
    $important: true
);
```

Now every class will be generated with the configured prefix:

```css
.block {
    display: block !important;
}

.flex {
    display: flex !important;
}

.grid {
    display: grid !important;
}
```

### Separator

The `$separator` allow to customize the character used on to separate classes modifiers _(media queries)_. For example,
you could set the `$separator` option to `@` like that:

```scss
@use "lasco" with (
    $separator: "@"
);
```


