# Digital ID Icons

An open visual vocabulary for recurring concepts related to digital IDs, designed by [Riley Hughes](https://x.com/rileyphughes) at [Trinsic](https://www.trinsic.id).

The set uses shared visual components to show relationships between categories, concepts, and functionality. The initial release is small (ten canonical icons, composed of five reusable components) but future releases may extend the icon set beyond categories and into other concepts. Contributions welcome.

## The icons

| | | |
| --- | --- | --- |
| <img src="./icons/national-id-wallets.svg" width="48" height="48" alt="National ID Wallets icon"><br>**[National ID Wallets](https://www.trinsic.id/category/national-id-wallets)**<br><code>national-id-wallets</code> | <img src="./icons/mobile-drivers-licenses.svg" width="48" height="48" alt="Mobile Driver's Licenses icon"><br>**[Mobile Driver's Licenses](https://www.trinsic.id/category/mobile-driver-s-licenses)**<br><code>mobile-drivers-licenses</code> | <img src="./icons/eudi-wallets.svg" width="48" height="48" alt="EUDI Wallets icon"><br>**[EUDI Wallets](https://www.trinsic.id/category/eudi-wallets)**<br><code>eudi-wallets</code> |
| <img src="./icons/reusable-ids.svg" width="48" height="48" alt="Reusable IDs icon"><br>**[Reusable IDs](https://www.trinsic.id/category/reusable-ids)**<br><code>reusable-ids</code> | <img src="./icons/bank-based-ids.svg" width="48" height="48" alt="Bank-based IDs icon"><br>**[Bank-based IDs](https://www.trinsic.id/category/bank-based-ids)**<br><code>bank-based-ids</code> | <img src="./icons/eidas-1-0.svg" width="48" height="48" alt="eIDAS 1.0 icon"><br>**[eIDAS 1.0](https://www.trinsic.id/category/eidas-1-0)**<br><code>eidas-1-0</code> |
| <img src="./icons/database-check.svg" width="48" height="48" alt="Database Check icon"><br>**[Database Check](https://www.trinsic.id/category/database-checks)**<br><code>database-check</code> | <img src="./icons/biometric-registries.svg" width="48" height="48" alt="Biometric Registries icon"><br>**[Biometric Registries](https://www.trinsic.id/category/biometric-registries)**<br><code>biometric-registries</code> | <img src="./icons/eid-cards.svg" width="48" height="48" alt="eID Cards icon"><br>**[eID Cards](https://www.trinsic.id/category/eid-cards)**<br><code>eid-cards</code> |
| <img src="./icons/age-verification.svg" width="48" height="48" alt="Age Verification icon"><br>**Age Verification**<br><code>age-verification</code> | | |

For more information about digital IDs in these categories, see [Trinsic's coverage](https://www.trinsic.id/coverage).

## The language

Most icons combine a top mark—what kind of ID it is—with a bottom component—how the ID is held or accessed.

| Component | Meaning | Used by |
| --- | --- | --- |
| Wallet | A credential held and presented from a wallet | National ID Wallets, Mobile Driver's Licenses, EUDI Wallets |
| Sign-in | A redirect or sign-in to an existing identity provider | Reusable IDs, Bank-based IDs, eIDAS 1.0 |
| Registry | A lookup against an authoritative source | Database Check, Biometric Registries |
| Person | An abstract biometrics-related cue | Reusable IDs, Biometric Registries |
| EU dots | An abstract EU-related cue | EUDI Wallets, eIDAS 1.0 |

Two icons stand alone. eID Cards is the one physical card in the set. Age Verification is a calendar with a keyhole: the date of birth is checked, but it stays locked.

The shared parts are available in [`components/`](./components/) for people extending the system. Read the [design system](./docs/design-system.md) before modifying them.

## Use

Download an SVG from [`icons/`](./icons/), or every icon at once from the [latest release](https://github.com/trinsic-id/digital-id-icons/releases/latest), and use it as an image:

```html
<img src="icons/national-id-wallets.svg" width="24" height="24" alt="National ID Wallets">
```

The source SVGs use `currentColor`. To control their color with CSS, inline the SVG markup:

```html
<svg
  viewBox="0 0 24 24"
  width="24"
  height="24"
  role="img"
  aria-labelledby="national-id-wallets-title"
  style="color: #0f6fec"
>
  <title id="national-id-wallets-title">National ID Wallets</title>
  <!-- Copy the paths from icons/national-id-wallets.svg here. -->
</svg>
```

An external SVG loaded through `<img>` does not inherit the page's `color`; it renders with its own default color. See [accessibility guidance](./docs/accessibility.md) for meaningful and decorative uses.

The minimum recommended display size is **24 px**. The two-part compositions lose separation below that size.

## Attribution

Feel free to use the icons. We'd appreciate attribution with something like:

> Digital ID Icons by Trinsic, licensed under CC BY 4.0.

Attribution can live in source, acknowledgements, third-party notices, documentation, or another reasonable location. It does not need to appear as a badge in product UI. See [`ATTRIBUTION.md`](./ATTRIBUTION.md) for modifications and redistribution examples.

## License

| Material | License |
| --- | --- |
| SVG artwork in `icons/` and `components/`; project documentation | [CC BY 4.0](./LICENSES/CC-BY-4.0.txt) |
| Scripts, examples, build configuration, and other code | [MIT](./LICENSES/MIT.txt) |

Trinsic names, logos, and marks are not licensed. See [`LICENSE.md`](./LICENSE.md) for the path-level scope and [`TRADEMARKS.md`](./TRADEMARKS.md) for the trademark boundary.

## Contributing

Contributions are welcome, but coherence matters more than icon count. Start with an issue that describes the identity concept, confusing neighboring concepts, and the shared component family you expect it to join. Then read [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Run the dependency-free validator before proposing a change:

```sh
npm run check
```

## Design and evidence

- [Design system](./docs/design-system.md)
- [Accessibility](./docs/accessibility.md)
- [Testing and limitations](./docs/testing.md)
- [Provenance](./docs/provenance.md)
- [Browser gallery](./examples/gallery.html)
