# Design system

Digital ID Icons is built as a compositional language. Shared geometry indicates shared behavior; changing a component in only one icon can make a relationship disappear.

## Grid and grammar

Every icon uses a 24×24 viewBox. Composed icons have two fixed regions:

- **Top region, y 3–12:** what the identity is. Marks that meet the bottom component, such as the flagpole, the car and the candles, continue to it.
- **Bottom region, y 15–21:** how the identity is held or accessed.

The drawing system uses:

- `stroke-width="2"`
- round caps and joins
- `fill="none"` for outlined geometry
- `currentColor` for strokes and for the filled EU dots and candle flames
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

The full three-band form is the Database Check icon. Biometric Registries and Age Verification use a compressed combining form to leave room for a top mark. The combining form is identical in both.

This is the system's one intentional component variation. The full and combining forms share the same meaning but are not byte-identical.

### Person

Appears in Reusable IDs and Biometric Registries. Four capture corners around a head indicate that the subject is the person rather than a document.

The frame stays inside the top region. Extending it around the full icon makes the registry base read as shoulders or a pedestal.

### EU dots

Appears in EUDI Wallets and eIDAS 1.0. It is a seven-dot arc used as an abstract EU-related cue. It is not the twelve-star EU emblem, an official EUDI mark, or an official eIDAS mark. Any adaptations under CC BY 4.0 must not imply official status, sponsorship, approval, or endorsement.

### Candles

Appears in Age Verification. Three birthday candles indicate that the answer is an age, not a full identity. The stems end where their round caps meet the top edge of the component below, the way the flagpole meets the wallet. The flames are filled because stroked teardrops read as arrowheads at 24 px.

Age is a property of the person, not a way of holding or accessing an ID, so the candles sit in the top region. Age Verification places them on the combining registry because age is ultimately a fact in a date-of-birth record, and because candles on that base read as a birthday cake.

Numerals were tested for this cue and rejected. “18+” names the concept instantly, but reviewers consistently singled it out as typography rather than a drawn object, and a number fixes one jurisdiction's threshold.

## Canonical compositions

| Icon | Top | Bottom |
| --- | --- | --- |
| National ID Wallets | Flag | Wallet |
| Mobile Driver's Licenses | Car front | Wallet |
| EUDI Wallets | EU dots | Wallet |
| Reusable IDs | Person | Sign-in |
| Bank-based IDs | Bank pediment | Sign-in |
| eIDAS 1.0 | EU dots | Sign-in |
| Database Check | Full registry | — |
| Biometric Registries | Person | Combining registry |
| Age Verification | Candles | Combining registry |
| eID Cards | Standalone card and edge chip | — |

eID Cards is deliberately uncomposed: it is the only physical card artifact in the set and is neither held in the system's wallet shape, entered through sign-in, nor represented as a direct lookup.

## Extending the set

A new icon should earn its place semantically before it is drawn. Name the concept, list its confusing neighbors, and decide which existing relationships matter. An icon that falsely joins a family is worse than one that is merely unfamiliar.

Do not force every icon into the two-region grammar. A standalone icon is appropriate when the concept does not share one of the system's defined access modes.
