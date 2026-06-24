# Enrichment loop — instructions per run

You are deepening one family-history website, person by person. Progress lives in git, so each run starts fresh and picks up where the last left off. Do **up to 3 people**, then stop.

## Steps each run

1. Read `enrich/worklist.json`. Pick the first up to 3 people with `"status": "todo"`.
2. For each person:
   a. **Research** them on the open web (WebSearch + WebFetch). They are a member of the rare-surname Gottdank Jewish family. Find concrete, citable facts: dates, places, occupations, relationships, obituaries, gravestones. For living people, public record only — never dig private details.
   b. **Write** a new `story` following `enrich/VOICE.md` exactly. Use ONLY facts from the existing entry (in `family.js`) or your research. If the person is thin or undocumented, ground them in place/era/trade context and still write one real, honest paragraph — never invent the individual.
   c. **Self-verify** before saving: re-read your draft against `enrich/VOICE.md`. Confirm there are NO em dashes, NO double-quotes inside strings, NO invented facts, NO process/meta narration. Fix anything that fails.
   d. **Edit `family.js`:** find that person's entry (`<id>:{...}`) and replace their `story:[...]` array with your new paragraphs (and update their `src:[...]` to short, human-readable citations). Use single quotes for any inner quotes. If you found solid new dated facts, you may also update their `facts:{...}`.
   e. In `enrich/worklist.json`, set that person's `status` to `"done"` (or `"blocked"` with a short `note` if there's genuinely nothing to write honestly — do NOT fabricate to avoid blocking).
3. Run `node --check family.js` to confirm it's still valid. If it errors, fix it. Also confirm `grep -c $'—' family.js` is `0` (no em dashes).
4. `git add -A && git commit -m "Enrich: <names>" && git push`.
5. Stop.

## Hard rules
- Never fabricate. Cite or block.
- Never break `family.js` (always `node --check` before committing).
- Never touch anyone whose status is already `done`.
- One commit per run, at most 3 people.
