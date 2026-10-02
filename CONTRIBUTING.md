# Contributing

Digital ID Icons is a visual vocabulary, not an open-ended icon collection. A new icon should make the system more useful without weakening its grammar.

## Start with an issue

Say what concept or field is missing, which existing icons it could be confused with, and where it belongs: which component family (wallet, sign-in, registry, biometric, EU-related) for a category icon, or which base and badge for an attribute icon. Or say why it should stand alone.

## Drawing rules

- 24×24 viewBox, `currentColor`, 2-unit strokes with round caps and joins.
- Centre straight strokes on whole units so they render sharply.
- Keep shared components and badges byte-identical; the validator enforces it.
- Test at the size the icon is used: 24 px for categories, 16 px for attributes.
- No scripts, external references, fonts, raster images, masks, or editor metadata.
- Don't copy path data from another icon set, or submit a third-party mark without documenting the right to use it.

Read [`docs/design-system.md`](./docs/design-system.md) before changing a component. The wallet's unbroken top edge, the position of the biometric frame, the bank lintel, and the database proportions are load-bearing.

## In the pull request

- Renders at the target size and at 48 px.
- A short naming test, and a grouping test if shared parts change, with labels hidden from the reviewer.
- Updated README, design system, and changelog where behavior changes.
- A passing `npm run check`.

Artwork you contribute is licensed under CC BY 4.0 and code under MIT. Renaming or removing an icon is a breaking change.
