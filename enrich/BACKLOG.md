# Standing backlog — the loop's fuel

The loop reads this, does the single highest-value undone item, checks `[x]` when done, and **adds any new threads it discovers** so it never runs dry. Open-ended on purpose. When nothing here is worth doing, the loop says so and stops.

## Now
- [x] Deepen the still-thin entries with honest place/era/trade context (no invented facts about the person): kateB, pauline, lawrence, beatrice, ellenP, heather, tracy, linda, celia, steven, grandkidsCA, torontoMisc, nygen, roseEC, sidney. (Done: thin one-liners — kateB, pauline, ellenP, heather, tracy, linda, celia, steven — rewritten with Chicago-widowhood / postwar-Plainview / Toronto-GTA / Mojave-China-Lake context grounded in already-cited family facts. The rest already carried honest place/era/lineage context.)
- [ ] Self-host the source snapshots that are still plain-text citations: capture each as an image into `img/sources/`, add a `srcLink()` mapping in `index.html`, so no source needs an external site. Priority: the Brazil Metrópoles Oct-7 article, the Delaware Beach Life / Franklin piece, the Knobbe / Jordan profile, the Albert Sandman obit, the Brooklyn College In Memoriam.
- [ ] Firm up the "likely / inferred" links where a free record exists: Sidney (Ridgecrest) = Harry & Rose's son; the Orange County cluster (Alex / Marilyn / Adam) relationships; the Plainview household parentage.
- [ ] Verify any date or place currently marked uncertain against a second free source; downgrade confidence if it doesn't hold.

## Needs a human (do NOT loop on these — flag and skip)
- The "unknown brother" and the unplaced NY cluster's shared father: requires logged-in census / NYC vital-records lookups.
- FamilySearch / Ancestry record images (gated): Charles's ship + barbershop, the 1909 marriage cert, etc.
- The family's own "Gottdank Descendants" document (Cole has the file).

## Rules
- Never fabricate. Cite or skip. Anything you can't source honestly, leave alone.
- One item per commit. Always `node --check family.js` and confirm `0` em dashes before committing.
- When you finish an item, add any new, real follow-ups you noticed to the "Now" list.
- Stop when "Now" is empty and you can't find a genuinely worthwhile improvement. Say so plainly.
