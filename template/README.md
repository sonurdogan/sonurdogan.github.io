# One-page starter

`starter.html` is a self-contained single-page template — same design system as the
site in the repo root. No build step, no dependencies beyond the web font.

Copy the file, replace the content, done.

## The six rules

1. **Colors only as tokens, defined exactly twice.** One `:root` block, one
   `[data-theme="dark"]` block. Nothing else in the CSS names a color, so retheming
   the whole page is a 10-line edit.
2. **No-flash theme script.** A tiny inline script in `<head>` sets `data-theme`
   before first paint. Without it, dark-mode visitors get a white flash on load.
3. **One typeface, careful metrics.** Inter at 16.5px, line-height 1.68,
   letter-spacing `-.009em`, `tabular-nums` on anything numeric so date columns align.
4. **Narrow measure, lots of air.** ~660px of text inside an 820px page, 96px of
   padding above the first element.
5. **The gutter grid.** `grid-template-columns: 116px 1fr` — section label in the
   left margin, content in the column, collapsing to one column under 760px.
6. **Hairlines and hover, no boxes.** No cards, shadows or gradients. 1px rules
   between sections, plus a soft hover background on rows that bleeds past the text
   via `margin: 0 -12px`. Transitions ~160ms, a `:focus-visible` ring, and a
   `prefers-reduced-motion` escape hatch.

One accent color, used only for links. When tempted to add a second color, add
whitespace instead.
