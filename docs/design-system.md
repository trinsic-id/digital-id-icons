# Design system

Icons in this set share parts. A shared part means the same thing in every icon that uses it, so changing a part in one icon breaks the relationship.

## Drawing rules

- 24×24 viewBox.
- 2-unit stroke, round caps and joins, `fill="none"` for outlines.
- `currentColor` for every stroke and fill.
- Straight strokes centred on whole units, so they render sharply at 24 px. Circles and ellipses centred on whole or half units. The EU dots are the exception: small filled circles can't render sharply.
- Minimum display size: 24 px for category icons, 16 px for attribute icons.

## Category icons

### Layout

Most category icons have two regions.

| Region | Rows | Shows |
| --- | --- | --- |
| Top | y 3–12 | What kind of ID it is |
| Bottom | y 15–21 | How the ID is held or accessed |

A top mark can extend down to meet the bottom component, as the flagpole and the car do.

### Components

| Component | Meaning | Used by | Rule |
| --- | --- | --- | --- |
| Wallet | A credential held and presented from a wallet | National ID Wallets, Mobile Driver's Licenses, EUDI Wallets | Keep the top edge unbroken. Marks can meet it but not cut through it. |
| Sign-in | A sign-in to an identity provider the user already has | Reusable IDs, Bank-based IDs, eIDAS 1.0 | — |
| Registry | A lookup against an authoritative source | Database Check (full form), Biometric Registries (combining form) | The combining form is shorter, to leave room for a top mark. The two forms are not byte-identical. |
| Biometric | Biometric capture of the person | Reusable IDs, Biometric Registries | Keep the frame inside the top region. |
| EU dots | Related to the EU | EUDI Wallets, eIDAS 1.0 | Always seven dots. This is not the twelve-star EU emblem and not an official EU, EUDI, or eIDAS mark. |

### Compositions

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
| eID Cards | Card with chip (standalone) | — |
| Age Verification | Calendar with keyhole (standalone) | — |

### Standalone icons

- **eID Cards:** a physical card with a chip. It isn't held in a wallet, signed in to, or looked up, so it uses no component.
- **Age Verification:** a calendar (the date of birth) with a keyhole (locked). An age check confirms that a person meets an age threshold without revealing their date of birth. The answer can come from a wallet, a sign-in, or a registry, so the icon uses no component.
  - Keep the keyhole outlined. Filled, it reads as a person at 24 px.
  - Don't add numerals such as "18+". Age thresholds vary by jurisdiction.

## Attribute icons

Attribute icons label the fields a verification returns. They use the same grid and stroke as the category icons and are drawn for 16 px.

### Base and badge

Most attribute icons combine a base and a badge.

- **Base:** the kind of value. Person, calendar (a date), pin (a place), card (a document), registry (records), page (a record), image frame (a picture), or shield (assurance).
- **Badge:** which value. It sits in the bottom-right corner, centred on (17, 17).
- Base strokes stop 8 units from the badge centre. The gap is cut into the base path; the files use no masks.
- Each badge is byte-identical in every icon that uses it, and `npm run check` enforces this. The base is cut differently for each badge.
- Give sibling badges different outlines. At 16 px, two round badges on the same base are hard to tell apart.

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

A base without a badge is its own icon: Name (person), File (page), Timestamp (clock), and Identifier (number sign).

### Standalone attribute icons

Phone, Email, Address, Sex, Signature, Vehicle, Legal status, Organization, Device, Language, Family, Physical description, Raw data, and Status use a single object and no badge.

## Marks shared across sets

| Mark | Meaning | Category icons | Attribute icons |
| --- | --- | --- | --- |
| Check | Verified | — | Data match, Face check, Report |
| Keyhole | Locked | Age Verification | Authentication |
| Flag | A country | National ID Wallets | Nationality, Issuing country |
| Registry | A lookup against an authoritative source | Database Check | Data match |
| Sign-in | An existing identity provider | Reusable IDs, Bank-based IDs | Identity provider |

The attribute versions are drawn for their own size and position, so they are not byte-identical to the category components.

## Adding an icon

- Name the concept or field, and the existing icons it could be confused with.
- Join a family only if the concept shares the family's meaning. A wrong family link misleads more than a standalone icon does.
- See [`CONTRIBUTING.md`](../CONTRIBUTING.md) for drawing rules and what a pull request needs.
