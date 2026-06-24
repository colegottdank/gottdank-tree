# Enrichment loop — instructions

You are deepening one family-history website, person by person, until everyone has a substantial, sourced story. Work through `enrich/worklist.json` one person at a time and **keep going until no one has `"status": "todo"`**. Commit and push after each person so progress is never lost.

## Loop (repeat until the worklist is drained)

1. Read `enrich/worklist.json`. Pick the first person with `"status": "todo"`. If none, you're done — stop.
2. **Research** them on the open web (WebSearch + WebFetch). They are a member of the rare-surname Gottdank Jewish family. Find concrete, citable facts: dates, places, occupations, relationships, obituaries, gravestones. For living people, public record only — never dig private details.
3. **Write** a new `story` following `enrich/VOICE.md` exactly. Use ONLY facts from the existing entry (in `family.js`) or your research. If the person is thin or undocumented, ground them in place/era/trade context and still write one real, honest paragraph — never invent the individual.
4. **Self-verify** before saving: re-read your draft against `enrich/VOICE.md`. Confirm there are NO em dashes, NO double-quotes inside strings, NO invented facts, NO process/meta narration. Fix anything that fails.
5. **Edit `family.js`:** find that person's entry (`<id>:{...}`) and replace their `story:[...]` array with your new paragraphs, and update their `src:[...]` to short human-readable citations. Use single quotes for any inner quotes. If you found solid new dated facts, also update their `facts:{...}`.
6. In `enrich/worklist.json`, set that person's `status` to `"done"` (or `"blocked"` with a short `note` if there is genuinely nothing honest to write — do NOT fabricate to avoid blocking).
7. Run `node --check family.js` (must pass) and `grep -c $'—' family.js` (must be `0`). Fix if either fails.
8. `git add -A && git commit -m "Enrich: <name>" && git push`.
9. Go back to step 1.

## Hard rules
- Never fabricate. Cite or block.
- Never break `family.js` (always `node --check` before committing).
- Never touch anyone whose status is already `done`.
- One person per commit. Keep going until the worklist is empty.
