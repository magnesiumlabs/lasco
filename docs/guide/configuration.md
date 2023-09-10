---
outline: deep
---

# Configuration

Without any configuration, all Lasco classes will be generated. To customize your theme, you can use many options
describe below.

## Options

### Prefix

The `$prefix` option allow to generate all classes with custom prefix. For example, you could set the `$prefix` option
to `ls` like that:

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

The `$important` option allow to generate all classes with `!important` rule. For example, you could set
the `$important` option to `true` like that:

```scss
@use "lasco" with (
    $important: true
);
```

Now every class will be generated with the `!important` rule:

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

The `$separator` option allow to customize the character used on to separate classes modifiers _(media queries)_. For
example, you could set the `$separator` option to `@` like that:

```scss
@use "lasco" with (
    $separator: "@"
);
```

### Core

The `core` section lets you completely configure each property you need by default on your project.

To disable specific properties, provide a map of each property and set to false:

```scss
@use "lasco" with (
    $core: (
        "display": false,
        "grayscale": false,
        "margin": false
    )
);
```

To configure a safelist, provide a list of each property you would like to use:

```scss
@use "lasco" with (
    $core: (
        "display",
        "grayscale",
        "margin"
    )
);
```

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

::: info
This option is passed on to [@unsass/breakpoint](https://github.com/unsass/breakpoint).
:::

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
