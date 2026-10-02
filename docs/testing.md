# Testing and limitations

Digital ID Icons was developed through iterative rendering, blind naming and grouping exercises, and a small human preference test. The evidence is useful but deliberately not presented as a representative usability study.

## What was tested

### Naming

Reviewers saw unlabeled icons and described the concrete object they perceived. This exposed semantic collisions such as a fingerprint reading as a rainbow, a bank without a lintel reading as a house, and a steering wheel inside a composed icon reading as a person's head.

### Grouping

Reviewers saw a scrambled, unlabeled set and identified repeated parts. This tested the visual system rather than whether each pictogram could be guessed in isolation.

Grouping produced the most consequential rule in the set: a shared component has to keep its recognizable geometry across family members. When the wallet's top edge was broken in one icon, the family relationship weakened.

### Preference

A browser-based comparison presented independent concept icons against the compositional system with randomized side placement. Three people participated. The result was close at the individual-icon level and favored the compositional system 2–1 overall. Three icons that lost their individual comparisons—National ID Wallets, Database Check, and Biometric Registries—were subsequently rebuilt.

### Age Verification

Age Verification was added after the initial nine. Candidates were tested one at a time: each reviewer saw the existing nine plus a single candidate, scrambled and unlabeled, with no mention of age. Showing several age candidates together was avoided because it primes reviewers toward age for everything on the sheet.

Numeral marks (“18+”, and numeral-shaped candles) were named as age every time and singled out as the icon that did not belong every time. Birthday candles on the registry were named as age and joined a component family, but read first as a birthday cake.

The current icon, a calendar with a keyhole, was tested the same way with three reviewers. All three named it as a date of birth or an age check, with medium confidence; one described it unprompted as an age check that does not reveal the date. Two were unsure whether the mark inside was a keyhole or a person. All three picked it as the icon least like the rest of the set, because it uses none of the shared components. That is expected for a standalone icon; eID Cards was picked the same way in earlier runs.

### Pixel grid

For 1.0 the geometry was aligned to the pixel grid. The aligned and unaligned sets were each shown to three reviewers under the same conditions. All five component families were found in every run, for both sets. One icon regressed: a narrower car read as a bell or a dome, so the aligned car keeps the original roof width. In a follow-up it was named as a car in both runs.

## Who reviewed it

Most blind naming and grouping runs used fresh multimodal model sessions with no access to the label key or design rationale. Those runs helped identify structural ambiguity quickly, but model behavior is not a substitute for representative human research.

The human preference sample was `n=3`. It is too small to support population-level claims.

## Known limitations

- The wallet family was detected inconsistently in later model-based grouping runs; EUDI Wallets was the member most likely to drop out.
- The registry relationship between Database Check and Biometric Registries was not detected once the full person capture frame was used. The clearer Biometric Registries icon was kept, accepting that loss.
- The EU dots can resemble a loading indicator without labels.
- Age Verification stands outside the component families and is read as the odd one out. At 24 px its keyhole can be mistaken for a person.
- eID Cards is specifically a card-based electronic identity category; it does not represent every form of electronic identity.
- The set has not been evaluated across languages, cultures, assistive technologies, or a representative sample of digital identity users.

## How to test a contribution

1. Render the complete set at 24 px and 48 px.
2. Scramble order and withhold all labels and rationale.
3. Ask one reviewer to name the concrete object in each icon.
4. Ask a different reviewer to group shared components and explain the perceived relationship.
5. Record guesses and partial groups; do not force a one-to-one matching task that allows elimination to inflate the score.
6. Change one variable at a time when diagnosing a failure.

Testing should reveal ambiguity, not manufacture a pass rate.
