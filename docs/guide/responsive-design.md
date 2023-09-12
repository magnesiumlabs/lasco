---
outline: deep
---

# Responsive Design

Utilities for applying the responsive design system on your theme.

## Usage

By default Lasco uses a mobile-first breakpoint system.

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

### Use a mobile-first breakpoint

Use responsive token to target each breakpoint you need on your theme.

```html

<div class="hidden md:block">
    <!-- ... -->
</div>
```

This will generate a `@media` with `min-width` following the core responsive configuration.

### Use a breakpoint range

You can easily target a breakpoint range if you combine two responsive tokens.

```html

<div class="md:xl:flex">
    <!-- ... -->
</div>
```

This will generate a `@media` with `min-width` and `max-width` following the core responsive configuration.
