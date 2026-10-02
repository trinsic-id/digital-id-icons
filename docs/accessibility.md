# Accessibility

The source SVGs do not contain fixed English labels or ARIA roles. Accessibility depends on how and why an icon is used, so the embedding context should supply the accessible name.

## Decorative icons

If nearby text already communicates the meaning, hide the icon from assistive technology:

```html
<img src="icons/bank-based-ids.svg" alt="" width="24" height="24">
<span>Bank-based IDs</span>
```

For inline SVG:

```html
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <!-- paths -->
</svg>
```

## Meaningful icons

When the icon communicates information that is not repeated in text, give it a context-specific name:

```html
<img
  src="icons/database-check.svg"
  alt="Verified against an authoritative source"
  width="24"
  height="24"
>
```

For inline SVG, use a `<title>` referenced by `aria-labelledby`:

```html
<svg viewBox="0 0 24 24" role="img" aria-labelledby="source-title">
  <title id="source-title">Verified against an authoritative source</title>
  <!-- paths -->
</svg>
```

Prefer a label that describes the meaning in the product, not merely the filename. “Identity checked against a government registry” may be more useful than “database icon.”

## Color and contrast

The icons use `currentColor` when inline, so they can follow the surrounding text color and contrast rules. Do not use color as the only way to distinguish identity categories or states.

External SVG files loaded through `<img>` do not inherit the parent page's `color`. If color must be controlled, inline the SVG or use another technique that preserves the accessible name.

## Size

Use category icons at 24 px or larger. At smaller sizes, the top and bottom components can merge and the relationship vocabulary becomes harder to perceive. Attribute icons are drawn for 16 px and larger. Provide adequate target size and spacing when an icon is interactive; the artwork's 24 px canvas is not itself a sufficient touch target.
