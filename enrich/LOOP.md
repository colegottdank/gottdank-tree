# The loop — instructions

You are continuously improving one family-history website. Progress lives in git, so each pass starts fresh and picks up where the last left off. **Keep going** until there's no worthwhile work left, then say so and stop.

## Which mode
1. If anyone in `enrich/worklist.json` is still `"status": "todo"`, run the **enrichment loop** below (one person per pass).
2. Otherwise, run the **standing loop**: read `enrich/BACKLOG.md`, do the single highest-value undone item, check it off, add any new real threads you find, commit. Repeat.

Either way: never fabricate (cite or skip); **maker ≠ checker** — an independent check you do NOT control must pass before you commit (step 5 below); one change per commit; always `node --check family.js` and `0` em dashes; never break the file.

---

## Enrichment loop (one person per pass)

## Loop (repeat until the worklist is drained)

1. Read `enrich/worklist.json`. Pick the first person with `"status": "todo"`. If none, switch to the standing loop (`enrich/BACKLOG.md`); if nothing's worthwhile there either, stop and say so.
2. **Deep dive (the point of this loop).** Search the open web EXHAUSTIVELY for THIS specific person: their full name and spelling variants alongside "Gottdank" (and any maiden / married names), their town or city, obituaries and death notices, gravestones (FindAGrave), professional profiles, news mentions, public records, directories, yearbooks. The surname is rare, so a name match is almost always them. Pull every concrete, citable fact you can: full dates, places, occupations, employers, spouses, children, immigration, military, schooling. For living people, public record only, nothing private. Cite or skip.
3. **Write a substantial, fact-based story** following `enrich/VOICE.md`: 1 to 3 short paragraphs, every concrete claim sourced, woven into a readable story rather than a list. Lead with their real life, the dated facts you found, what they did and where. Update `facts:{...}` with the new dated facts and refresh `src:[...]`. For a thin or undocumented person, ground them honestly in place / era / trade and say plainly what isn't known, never invent the individual. If the entry is already deep, verify it's still accurate and current and fold in anything new you turned up. The goal: everyone ends with real, updated info about themselves and a genuine story.
4. **Edit `family.js`:** replace that person's `story:[...]` and `src:[...]`; update `facts:{...}` if you found solid new dated facts. Single quotes for any inner quotes.
5. **Independent check — maker ≠ checker (the load-bearing step).** Hand the new entry to a SEPARATE subagent (a `Task`) to verify. Give it everything it needs to judge fairly: the person's `rel`, the facts of any relatives the story references from elsewhere in the tree, and the cited sources — so it does NOT false-flag true cross-references. Ask it to flag: any claim not backed by the tree or a cited source (fabrication, especially invented names / dates / places), em dashes, double-quotes, and off-voice prose. If it flags something real, fix it and re-check. You wrote it, so you don't get to clear it.
6. In `enrich/worklist.json`, set `"status"` to `"done"` (or `"blocked"` + short `note` if there's genuinely nothing honest to write — never fabricate to avoid blocking).
7. `node --check family.js` (must pass) and `grep -c $'—' family.js` (must be `0`). Fix if either fails.
8. `git add -A && git commit -m "Enrich: <name>" && git push`.
9. Back to step 1.

## Hard rules
- Never fabricate. Cite or block.
- Never break `family.js` (always `node --check` before committing).
- Never touch anyone whose status is already `done`.
- One person per commit. Keep going until the worklist is empty.
