# Contributing

Digital ID Icons is a visual vocabulary, not an open-ended pictogram collection. A contribution should make the system more useful without weakening its grammar.

## Before drawing

Open an issue that answers:

1. What digital identity concept is missing?
2. Who needs to distinguish it, and in what context?
3. Which existing icons could it be confused with?
4. Which component family should it join: wallet, sign-in, registry, person, EU-related, age, or none?
5. Does the concept rely on a government, company, standards-body, or provider mark?

Maintainers may decide that a concept is too specific, too ambiguous, or better represented by an existing icon.

## Drawing rules

- Use a 24×24 viewBox and keep the useful geometry inside the established live area.
- Use `currentColor`; do not hard-code brand colors.
- Default to 2 px strokes with round caps and joins.
- Centre straight strokes on whole units so they render sharply at 24 px.
- Preserve shared component geometry exactly when joining an existing family.
- Prefer one clear relationship over decorative detail.
- Test at 24 px, not only at presentation sizes.
- Do not use embedded scripts, event handlers, external references, fonts, raster images, or editor metadata.
- Do not copy path data from another icon set.

Read [`docs/design-system.md`](./docs/design-system.md) before changing a component. The wallet's unbroken top edge, the position of the person frame, the bank lintel, and the database proportions are load-bearing.

## Rights

By contributing artwork, you agree that your contribution is available under CC BY 4.0 and that you have the right to provide it under that license. By contributing code or tooling, you agree that your contribution is available under MIT.

Do not submit a recognizable government, standards-body, company, provider, or product mark without documenting the right to use and redistribute it. Attribution does not create endorsement.

## What a pull request needs

- The issue it resolves.
- The concept and confusion risks.
- Before/after renders at 24 px and 48 px for geometry changes.
- A short naming test and grouping test with the label key withheld from the reviewer.
- Updated README icon table, design-system documentation, and changelog when behavior changes.
- A passing `npm run check`.

Maintainers decide stable filenames, display names, and whether an icon belongs in the canonical set. Renaming or removing a canonical slug is a breaking change.
