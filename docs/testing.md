# Testing and limitations

The tests check whether people can identify each icon and see which icons share parts. The samples are small, so treat the results as directional.

## Method

| Test | Task | Size |
| --- | --- | --- |
| Naming | Name the object in each unlabeled icon and guess what it represents. | 24 px for categories, 16 px for attributes |
| Grouping | Group the icons that share a part and say what the part means. | 24 px |
| Preference | Choose between this set and standalone concept icons, with sides randomized. | — |

- Sheets are scrambled and unlabeled. Reviewers don't see labels or design notes.
- A new category icon is tested on its own sheet, alongside the existing set.
- Naming and grouping use two or three fresh AI model sessions per round. The preference test had three human participants.

## Known limitations

- **Wallet family:** EUDI Wallets is the member reviewers most often miss.
- **Registry:** reviewers rarely link Database Check and Biometric Registries.
- **EU dots:** without a label, they can read as a loading indicator.
- **Age Verification:** usually picked as the icon least like the set. At 24 px, the keyhole can read as a person.
- **eID Cards:** represents card-based electronic IDs only.
- **Attribute siblings:** at 16 px, icons on the same base differ only by a small badge. The five document icons are the hardest to tell apart.
- **Numbers:** Identifier, Document number, and Personal number all read as "a number".
- **Labels required:** Document status, Personal status, Portrait, Note, Image authenticity, Authentication, Screening, and Identity provider need their label to identify the field.
- **Coverage:** not tested across languages, cultures, assistive technologies, or a representative sample of users.

## Test a contribution

1. Render the full set at the target size and at 48 px.
2. Scramble the order and remove the labels.
3. Ask one reviewer to name the object in each icon.
4. Ask a different reviewer to group the icons by shared parts.
5. Record partial answers. Don't use a matching task: elimination inflates the score.
