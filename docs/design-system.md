# Design system

Digital ID Icons is built as a compositional language. Shared geometry indicates shared behavior; changing a component in only one icon can make a relationship disappear.

## Grid and grammar

Every icon uses a 24×24 viewBox. Composed icons have two fixed regions:

- **Top region, y 3–12:** what the identity is. Marks that meet the bottom component, such as the flagpole and the car, continue to it.
- **Bottom region, y 15–21:** how the identity is held or accessed.

The drawing system uses:

- `stroke-width="2"`
- round caps and joins
- `fill="none"` for outlined geometry
- `currentColor` for strokes and for the filled EU dots
- a recommended minimum display size of 24 px

## Pixel grid

Straight strokes are centred on whole units, so a 2 px stroke covers exactly two pixel rows at 24 px and four at 48 px. Circles and ellipses sit on whole or half units. The EU dots are the one exception: small filled circles cannot render sharply at any position.

## Components

### Wallet

Appears in National ID Wallets, Mobile Driver's Licenses, and EUDI Wallets. It indicates a credential held and presented directly from a wallet.

The wallet's top edge must remain unbroken. Marks may meet it, but should not cut through it. When the edge was broken during testing, readers stopped seeing a shared wallet shape and instead saw unrelated objects sitting in a tray.

### Sign-in

Appears in Reusable IDs, Bank-based IDs, and eIDAS 1.0. The arrow entering a bounded area indicates that the user is redirected or signed in to an identity provider they already use.

### Registry

The full three-band form is the Database Check icon. Biometric Registries uses a compressed combining form to leave room for a top mark.

This is the system's one intentional component variation. The full and combining forms share the same meaning but are not byte-identical.

### Biometric

Appears in Reusable IDs and Biometric Registries. Four capture corners around a head indicate that the subject is the person rather than a document.

The frame stays inside the top region. Extending it around the full icon makes the registry base read as shoulders or a pedestal.

### EU dots

Appears in EUDI Wallets and eIDAS 1.0. It is a seven-dot arc used as an abstract EU-related cue. It is not the twelve-star EU emblem, an official EUDI mark, or an official eIDAS mark. Any adaptations under CC BY 4.0 must not imply official status, sponsorship, approval, or endorsement.

## Standalone icons

### Age Verification

A calendar with a keyhole. The calendar is the date of birth; the keyhole says it stays locked. An age check answers whether someone is old enough without handing over the date itself, so the icon shows a date you can't read rather than an age.

It stands alone because age is not a way of holding or accessing an ID: the same answer can come from a wallet, a sign-in, or a registry lookup. The keyhole is outlined rather than filled. A filled circle over a trapezoid reads as a person at 24 px.

Numerals and birthday imagery were tested for this icon and rejected. “18+” names the concept instantly, but reviewers consistently singled it out as typography rather than a drawn object, and a number fixes one jurisdiction's threshold. Candles read as age but also as a birthday cake, and said nothing about the privacy that makes a digital age check different from showing an ID card.

## Canonical compositions

| Icon | Top | Bottom |
| --- | --- | --- |
| National ID Wallets | Flag | Wallet |
| Mobile Driver's Licenses | Car front | Wallet |
| EUDI Wallets | EU dots | Wallet |
| Reusable IDs | Biometric frame | Sign-in |
| Bank-based IDs | Bank pediment | Sign-in |
| eIDAS 1.0 | EU dots | Sign-in |
| Database Check | Full registry | — |
| Biometric Registries | Biometric frame | Combining registry |
| Age Verification | Calendar with keyhole | — |
| eID Cards | Standalone card and edge chip | — |

eID Cards and Age Verification are deliberately uncomposed. eID Cards is the only physical card artifact in the set and is neither held in the system's wallet shape, entered through sign-in, nor represented as a direct lookup. Age Verification describes an answer that any of those access modes can return.

## Extending the set

A new icon should earn its place semantically before it is drawn. Name the concept, list its confusing neighbors, and decide which existing relationships matter. An icon that falsely joins a family is worse than one that is merely unfamiliar.

Do not force every icon into the two-region grammar. A standalone icon is appropriate when the concept does not share one of the system's defined access modes.

## Attribute icons

Attribute icons label the fields a verification returns. They share the category set's 24×24 grid, 2-unit stroke, and round joins, and are drawn to read at 16 px, where one unit is two-thirds of a pixel. At that size the shape of a part matters more than its detail.

### Base and badge

Most attribute icons combine a base with a badge:

- **The base** says what kind of value the field holds: a person, a date (calendar), a place (pin), a document (card), records (registry), a record (page), a picture (image frame), or assurance (shield).
- **The badge** sits in the bottom-right corner, centred on (17, 17), and says which one. Base strokes are cut back so they stay 8 units from the badge centre. The clearance is part of the base path; the files use no masks.

A badge is byte-identical in every icon that uses it, and the validator enforces this. The base is cut differently for each badge, so it is not.

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

Where a base alone means something, it is its own icon: Name is the bare person, File the bare page, Timestamp the bare clock, Identifier the bare number sign. These unmarked members teach the reader the base before the badges modify it.

Sibling badges need different silhouettes. At 16 px two round badges on the same base blur into each other, which is why the issuer is a building, not a circled mark.

### Standalone attribute icons

Some fields have one obvious object and need no grammar: phone, email, address, sex, signature, vehicle, legal status, organization, device, language, family, physical description, raw data, and status. Like eID Cards in the category set, they stand alone.

### Shared meanings across both sets

The two sets use some marks with the same meaning:

- **Check:** verified. Data match, face check, and report in the attribute set.
- **Keyhole:** locked, access controlled. Authentication in the attribute set, and Age Verification in the category set: a date of birth that is checked but stays locked.
- **Flag:** a country. National ID Wallets in the category set; nationality and issuing country in the attribute set.
- **Registry:** a lookup against an authoritative source. Database Check in the category set; data match in the attribute set.
- **Sign-in:** an existing identity provider. Reusable IDs and Bank-based IDs in the category set; identity provider in the attribute set.

The attribute versions are drawn for their own size and position, so they are not byte-identical to the category components.

