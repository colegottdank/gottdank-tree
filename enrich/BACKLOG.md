# Standing backlog — the loop's fuel

The loop reads this, does the single highest-value undone item, checks `[x]` when done, and **adds any new threads it discovers** so it never runs dry. Open-ended on purpose. When nothing here is worth doing, the loop makes no commit.

## Now
- [x] Deepen `thename` (the surname's origin): research the documented 1700s Hanau / Galicia origin of "Gottdank" and the broader Galician-Jewish naming context; enrich the story with sourced history, marking anything uncertain plainly. Never assert what isn't documented.
- [ ] Re-verify entries marked `conf:"likely"` or carrying a `gap`, ONE per run, against a fresh free source. If it holds, tighten the wording and cite the second source; if it doesn't hold, downgrade the confidence and note why. (Candidates: sidney, marilyn, adam, josephP, lawrence, beatrice, jessica, michaelNJ, abrahamW, miriam.)
- [ ] Add honest period / place / trade context to any branch entry that still reads as a bare one-liner, ONE per run, grounded only in already-cited facts. Never invent the individual.
- [ ] Capture any source still resolving to an external site as a local snapshot in `img/sources/` + a `srcLink()` mapping (check `srcLink()` in `index.html`). Keep captures to a single full-page screenshot, do NOT stitch composites.

## Needs a human (do NOT loop on these — flag and skip)
- The "unknown brother" and the unplaced NY cluster's shared father: requires logged-in census / NYC vital-records lookups.
- FamilySearch / Ancestry record images (gated, and bot-blocked even in the cloud): Charles's ship + barbershop, the 1909 marriage cert, etc.
- The family's own "Gottdank Descendants" document (Cole has the file).

## Rules
- Never fabricate. Cite or skip. Anything you can't source honestly, leave alone.
- One item per commit. Always `node --check family.js` and confirm `0` em dashes before committing.
- Verification is maker ≠ checker: the step-5 independent critic must pass before you commit.
- When you finish an item, add any new, real follow-ups you noticed to "Now".
- Stop when "Now" is empty (or only human items remain) and make no commit.
