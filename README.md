 xDial — landing page

Marketing landing page for xDial, the AI employee for insurance verification.

Built with **React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS v4 · shadcn/ui**.

```bash
npm install
npm run dev        # dev server        → http://localhost:5173
npm run build      # typecheck + build → dist/
npm run preview    # serve dist/
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run format     # prettier --write .
```

Requires Node 22+ (developed on 24.19.0).

---

## Project layout

```
src/
├─ main.tsx                    entry
├─ App.tsx                     page composition + skip link
├─ index.css                   Tailwind entry, base layer, reduced-motion
├─ styles/
│  ├─ theme.css                design tokens (@theme) + shadcn variable mapping
│  └─ utilities.css            custom utilities (hero scene, neon bubbles, meter)
├─ content/                    all copy and demo data, typed — no strings in JSX
│  ├─ types.ts                 shared shapes (FeatureItem, ProcessStep, …)
│  ├─ navigation.ts            header / footer / legal links
│  ├─ hero.ts                  hero copy, highlights, speech-bubble captions
│  ├─ product.ts               steps, capabilities, integrations, closing CTA
│  ├─ partners.ts              customer logos
│  └─ demo-data.ts             sample verification report + call log
├─ components/
│  ├─ ui/                      shadcn primitives (owned — edit freely)
│  ├─ layout/                  Container, SiteHeader, SiteFooter
│  ├─ brand/                   Logo, partner marks
│  ├─ sections/                one file per band of the page
│  └─ icons.tsx                local marks lucide doesn't cover
├─ hooks/
│  └─ use-scrolled.ts
└─ lib/utils.ts                cn()
```

**Content is separated from presentation.** Every string lives in `src/content/`
behind an interface, so copy changes never require touching a component, and a
CMS or i18n layer can be dropped in by swapping those modules.

---

## Design system

`src/styles/theme.css` is the single source of truth. Nothing in the components
hard-codes a colour or a font size.

The reference design (`assets/landing page.png`) is a **1024×1536 render with a
960px content column**. Colours were sampled from it programmatically; the type
scale was derived by measuring cap-heights in it and multiplying by 1.25, which
preserves its proportions on the 1280px content column used here.

| Group | Tokens | Notes |
| --- | --- | --- |
| Brand | `brand-50 … brand-900` | `brand-600` buttons/links, `brand-500` accent copy |
| Dark surfaces | `navy-600 … navy-950` | hero, trust strip, activity panel, CTA banner |
| Light surfaces | `mist`, `sky-tint` | light sections, integrations panel |
| Text | `ink-200 … ink-900`, `frost-100/300/500` | on light / on dark |
| Accents | `success-*`, `neon-green`, `neon-pink`, `grid-line` | badges, captions, hero floor |
| Type | `text-eyebrow … text-h1` | size + line-height + tracking + weight per step |

shadcn's semantic variables (`--primary`, `--border`, …) are remapped onto these
tokens, so every primitive inherits the brand without per-component overrides.

### Responsive approach

One container (`Container`) sets the horizontal rhythm for every section, so the
header, hero, headings and footer share an exact left edge. Layout is
mobile-first: single column, then `sm:` for two-up grids, then `lg:` for the
side-by-side bands. The hero headline uses `clamp(2.25rem, 4.4vw, 3.5rem)` so it
scales with the container and always holds "Insurance Verification," on one
line. Verified at 390 / 834 / 1280 / 1440px.

### Accessibility

- `axe-core` reports **0 violations** (WCAG 2.1 A + AA + best practice) at both
  390px and 1440px.
- One sampled colour was changed for compliance: the muted label grey measured
  4.36:1 on white, below AA for 13px text, and was darkened to 4.87:1. This is
  noted inline in `theme.css`.
- Landmarks (`header` / `main` / `footer` / `nav`), a skip link, and labelled
  navigation regions.
- Focus is always visible: the shadcn inset ring nearly disappears on the dark
  sections, so an offset outline was added to the `Button` base.
- Decorative artwork is `alt=""` + `aria-hidden`; the hero illustration carries a
  real description.
- `prefers-reduced-motion` disables the smooth scroll and the waveform animation.

---

## Assets — important

Everything supplied in `assets/` is a **raster PNG wrapped in an SVG shell**
(`<image href="data:image/png;base64,…">`); none are true vectors. The icons are
21–27px bitmaps, the logos and the speech-bubble texts are flattened images, and
six of the files are duplicates of the full page render. Using them directly
would have produced a blurry page on any high-density display.

So the page was rebuilt from vector and live text wherever possible:

| Reference element | How it is built here |
| --- | --- |
| UI icons | `lucide-react`, plus `DialpadIcon` / `HashCircleIcon` in `components/icons.tsx` |
| xDial logo | vector `XMark` + live wordmark (`brand/Logo.tsx`) |
| Partner logos | vector marks + live text (`brand/partner-marks.tsx`) |
| Neon speech bubbles | real text + CSS glow (`sections/HeroBubble.tsx`) |
| Verification report | real definition lists with tabular figures |
| Activity waveform | animated CSS bars (`sections/AudioMeter.tsx`) |

### The mascot artwork is a placeholder

The T-Rex and angry-phone illustrations exist **only inside the 1024px page
render** — there is no separate source file. `public/images/*.png` was cropped
out of it programmatically, with per-pixel alpha so the crops dissolve into
their surroundings instead of showing a rectangle:

| File | Size | Notes |
| --- | --- | --- |
| `hero-mascots.png` | 566×310 | feathered edges; bubble tails and stray copy masked out |
| `dino-run.png` | 267×118 | pixel art |
| `dino-thumbsup.png` | 186×212 | pixel art |
| `dino-sprite.png` | 24×24 | pixel art, repeated per activity row |
| `dino-cheer.png` | 56×57 | pixel art |

The pixel-art crops upscale cleanly (`image-rendering: pixelated`). **The hero
illustration does not** — at 566px native it is soft on a 2× display, and it is
the one thing on the page that is not resolution-independent. Drop a higher-res
original in at the same path and no code needs to change.

The partner logos are likewise typographic reconstructions matched to the
reference; replace them with the official files each partner supplies.

---

## Known deviations from the reference

Deliberate, and worth knowing about:

1. **Content column is 1280px, not 960px.** The reference is a 1024px artboard;
   rendering it literally would look cramped on modern displays. Proportions are
   preserved via the 1.25 type scale.
2. **Sections are slightly taller.** The reference is a very dense render whose
   in-card type would be 9–11px at real sizes. Card and report text was raised to
   13–14px for legibility, which costs some vertical compression.
3. **Speech bubbles are live text**, so their metrics differ marginally from the
   flattened originals.
4. **Header is sticky** and gains a blurred backdrop once it overlaps content. At
   scroll-0 it matches the reference exactly.
5. **Light theme only.** The reference defines a single theme (light page, dark
   bands). The shadcn `.dark` variables are left intact but no dark variant of
   the marketing sections was designed, so no theme toggle is exposed.

## Next steps

- Replace the mascot art and partner logos with production files.
- Wire the `#book-a-demo` / `#watch-a-verification` anchors to real destinations.
- `npx shadcn@latest add <component>` for any further primitives; `dialog`,
  `form` and `input` are the likely next ones for the demo-booking flow.
