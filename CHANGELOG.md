# Changelog

Public releases of Digital ID Icons will be recorded here. Internal design rounds are intentionally kept out of the public release history.

## 1.1.0 — 2026-10-01

### Added

- 44 attribute icons for the fields a verification returns, in `attributes/`, drawn to read at 16 px.
- 11 attribute badges in `attributes/badges/`. The validator checks that each badge is identical in every icon that uses it.

### Changed

- The person component is renamed `biometric`, since it is a biometric capture frame. The attribute set has its own person, meaning the individual.
- Documentation is consolidated: attribution, trademark, provenance, and accessibility guidance now live in the README and `LICENSE.md`.

- Age Verification is redrawn as a calendar with a keyhole: a date of birth that is checked but stays locked. It is now a standalone icon rather than a composition on the registry.

### Removed

- The candles component, which only Age Verification used.

## 1.0.0 — 2026-09-25

### Added

- Ten canonical digital identity concept icons, including Age Verification.
- Six documented components: wallet, sign-in, registry, person, EU dots, and candles.
- Design-system, accessibility, testing, and provenance documentation.
- CC BY 4.0 artwork/documentation licensing and MIT code/tooling licensing.
- Dependency-free structural validator and self-contained browser gallery.
- Geometry aligned to the pixel grid, so strokes render sharply at 24 px.
