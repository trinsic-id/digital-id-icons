# Digital ID Icons

An open visual vocabulary for recurring concepts related to digital IDs, designed by [Riley Hughes](https://x.com/rileyphughes) at [Trinsic](https://www.trinsic.id).

The set uses shared visual components to show relationships between categories, concepts, and functionality. It has two parts: ten icons for categories of digital ID, built from five reusable components, and 44 icons for the attributes a verification returns, built from 11 badges. Contributions welcome.

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
| Biometric | An abstract biometrics-related cue | Reusable IDs, Biometric Registries |
| EU dots | An abstract EU-related cue | EUDI Wallets, eIDAS 1.0 |

Two icons stand alone. eID Cards is the one physical card in the set. Age Verification is a calendar with a keyhole: the date of birth is checked, but it stays locked.

The shared parts are available in [`components/`](./components/) for people extending the system. Read the [design system](./docs/design-system.md) before modifying them.

## Attribute icons

Icons for the fields a verification returns: names, dates, places, documents, checks, and attachments. They use the same grid and stroke, and are drawn to stay readable at **16 px**, the size they usually appear at in a list of fields.

| | | | |
| --- | --- | --- | --- |
| <img src="./attributes/name.svg" width="32" height="32" alt="Name icon"><br>Name<br><code>name</code> | <img src="./attributes/date-of-birth.svg" width="32" height="32" alt="Date of birth icon"><br>Date of birth<br><code>date-of-birth</code> | <img src="./attributes/place-of-birth.svg" width="32" height="32" alt="Place of birth icon"><br>Place of birth<br><code>place-of-birth</code> | <img src="./attributes/sex.svg" width="32" height="32" alt="Sex icon"><br>Sex<br><code>sex</code> |
| <img src="./attributes/nationality.svg" width="32" height="32" alt="Nationality icon"><br>Nationality<br><code>nationality</code> | <img src="./attributes/phone.svg" width="32" height="32" alt="Phone icon"><br>Phone<br><code>phone</code> | <img src="./attributes/email.svg" width="32" height="32" alt="Email icon"><br>Email<br><code>email</code> | <img src="./attributes/address.svg" width="32" height="32" alt="Address icon"><br>Address<br><code>address</code> |
| <img src="./attributes/personal-number.svg" width="32" height="32" alt="Personal number icon"><br>Personal number<br><code>personal-number</code> | <img src="./attributes/physical-description.svg" width="32" height="32" alt="Physical description icon"><br>Physical description<br><code>physical-description</code> | <img src="./attributes/personal-status.svg" width="32" height="32" alt="Personal status icon"><br>Personal status<br><code>personal-status</code> | <img src="./attributes/family.svg" width="32" height="32" alt="Family icon"><br>Family<br><code>family</code> |
| <img src="./attributes/document.svg" width="32" height="32" alt="Document icon"><br>Document<br><code>document</code> | <img src="./attributes/document-number.svg" width="32" height="32" alt="Document number icon"><br>Document number<br><code>document-number</code> | <img src="./attributes/issue-date.svg" width="32" height="32" alt="Issue date icon"><br>Issue date<br><code>issue-date</code> | <img src="./attributes/document-status.svg" width="32" height="32" alt="Document status icon"><br>Document status<br><code>document-status</code> |
| <img src="./attributes/expiration-date.svg" width="32" height="32" alt="Expiration date icon"><br>Expiration date<br><code>expiration-date</code> | <img src="./attributes/issuing-country.svg" width="32" height="32" alt="Issuing country icon"><br>Issuing country<br><code>issuing-country</code> | <img src="./attributes/issuing-authority.svg" width="32" height="32" alt="Issuing authority icon"><br>Issuing authority<br><code>issuing-authority</code> | <img src="./attributes/vehicle.svg" width="32" height="32" alt="Vehicle icon"><br>Vehicle<br><code>vehicle</code> |
| <img src="./attributes/legal-status.svg" width="32" height="32" alt="Legal status icon"><br>Legal status<br><code>legal-status</code> | <img src="./attributes/match.svg" width="32" height="32" alt="Data match icon"><br>Data match<br><code>match</code> | <img src="./attributes/face-check.svg" width="32" height="32" alt="Face check icon"><br>Face check<br><code>face-check</code> | <img src="./attributes/image-authenticity.svg" width="32" height="32" alt="Image authenticity icon"><br>Image authenticity<br><code>image-authenticity</code> |
| <img src="./attributes/screening.svg" width="32" height="32" alt="Screening icon"><br>Screening<br><code>screening</code> | <img src="./attributes/assurance.svg" width="32" height="32" alt="Assurance level icon"><br>Assurance level<br><code>assurance</code> | <img src="./attributes/authentication.svg" width="32" height="32" alt="Authentication icon"><br>Authentication<br><code>authentication</code> | <img src="./attributes/selfie.svg" width="32" height="32" alt="Selfie icon"><br>Selfie<br><code>selfie</code> |
| <img src="./attributes/document-back.svg" width="32" height="32" alt="Document back icon"><br>Document back<br><code>document-back</code> | <img src="./attributes/portrait.svg" width="32" height="32" alt="Portrait icon"><br>Portrait<br><code>portrait</code> | <img src="./attributes/signature.svg" width="32" height="32" alt="Signature icon"><br>Signature<br><code>signature</code> | <img src="./attributes/report.svg" width="32" height="32" alt="Report icon"><br>Report<br><code>report</code> |
| <img src="./attributes/file.svg" width="32" height="32" alt="File icon"><br>File<br><code>file</code> | <img src="./attributes/identifier.svg" width="32" height="32" alt="Identifier icon"><br>Identifier<br><code>identifier</code> | <img src="./attributes/timestamp.svg" width="32" height="32" alt="Timestamp icon"><br>Timestamp<br><code>timestamp</code> | <img src="./attributes/status.svg" width="32" height="32" alt="Status icon"><br>Status<br><code>status</code> |
| <img src="./attributes/raw-data.svg" width="32" height="32" alt="Raw data icon"><br>Raw data<br><code>raw-data</code> | <img src="./attributes/note.svg" width="32" height="32" alt="Note icon"><br>Note<br><code>note</code> | <img src="./attributes/certificate.svg" width="32" height="32" alt="Certificate icon"><br>Certificate<br><code>certificate</code> | <img src="./attributes/organization.svg" width="32" height="32" alt="Organization icon"><br>Organization<br><code>organization</code> |
| <img src="./attributes/device.svg" width="32" height="32" alt="Device icon"><br>Device<br><code>device</code> | <img src="./attributes/language.svg" width="32" height="32" alt="Language icon"><br>Language<br><code>language</code> | <img src="./attributes/location.svg" width="32" height="32" alt="Location icon"><br>Location<br><code>location</code> | <img src="./attributes/provider.svg" width="32" height="32" alt="Identity provider icon"><br>Identity provider<br><code>provider</code> |

Most attribute icons pair a base, which says what kind of value it is (a person, a date, a place, a document, a page, a picture), with a badge in the bottom-right corner, which says which one. A badge means the same thing on every base.

| Badge | Meaning | Used by |
| --- | --- | --- |
| Person | of the person | Date of birth, Place of birth, Portrait |
| Issuer | issued by | Issue date, Issuing authority |
| Flag | country of | Issuing country, Nationality |
| Clock | runs out | Expiration date |
| Check | verified | Face check, Data match, Report |
| Number | its number | Document number, Personal number |
| Info | status | Document status, Personal status |
| Magnifier | searched | Screening |
| Shield | authentic | Image authenticity |
| Seal | certified | Certificate |
| Pencil | written | Note |

The badges are in [`attributes/badges/`](./attributes/badges/). The bare base is its own icon where the base alone means something: Name is the bare person, File the bare page.

## Use

Download an SVG from [`icons/`](./icons/) or [`attributes/`](./attributes/), or every icon at once from the [latest release](https://github.com/trinsic-id/digital-id-icons/releases/latest), and use it as an image:

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

The minimum recommended display size is **24 px** for category icons, whose two-part compositions lose separation below that, and **16 px** for attribute icons.

## Attribution

Feel free to use the icons. We'd appreciate attribution with something like:

> Digital ID Icons by Trinsic, licensed under CC BY 4.0.

Attribution can live in source, acknowledgements, third-party notices, documentation, or another reasonable location. It does not need to appear as a badge in product UI. See [`ATTRIBUTION.md`](./ATTRIBUTION.md) for modifications and redistribution examples.

## License

| Material | License |
| --- | --- |
| SVG artwork in `icons/`, `components/`, and `attributes/`; project documentation | [CC BY 4.0](./LICENSES/CC-BY-4.0.txt) |
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
