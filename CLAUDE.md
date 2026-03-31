# Sapphire Salon NH — Claude Code Memory

## Project overview
Static brochure site for a hair salon in Hudson, NH.
Converted from WordPress/WPMUDEV to **Astro 4 + Vercel + GitHub**.
Zero monthly hosting cost (Vercel free tier). Domain: sapphiresalonnh.com.

## Stack
- **Framework:** Astro 4 (static output, no SSR)
- **Styling:** Plain CSS inside `<style is:global>` in `src/layouts/Layout.astro` — no Tailwind, no CSS modules
- **JavaScript:** Vanilla JS inside `<script>` in each component — no frameworks
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **Fonts:** Google Fonts — Yanone Kaffeesatz (headings/nav)
- **Images:** Static files in `public/images/` — downloaded from live WP site via `scripts/download-images.sh`

## File structure
```
sapphire-salon/
├── public/images/          # All site images (header, salon-1/2/3, team x4, hero slides)
├── scripts/
│   └── download-images.sh  # curl script to pull images from live WP site
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # HTML shell + all global CSS (<style is:global>)
│   ├── components/
│   │   ├── Nav.astro       # Fixed nav + mobile hamburger script
│   │   ├── Hero.astro      # 5-slide carousel + script
│   │   ├── About.astro     # About paragraph + two-col photo grid
│   │   ├── Services.astro  # Tabbed pricing tables + script
│   │   ├── Team.astro      # 4-up team grid
│   │   └── Contact.astro   # Google Maps + contact details + footer
│   └── pages/
│       └── index.astro     # Imports Layout + all components
├── astro.config.mjs
├── package.json
└── CLAUDE.md
```

## CSS architecture note
All CSS lives in `<style is:global>` inside `Layout.astro`. Do NOT use a separate
`src/styles/global.css` file with a `<link>` tag — Astro does not serve files from
`src/` as static assets, which causes a 404. The `is:global` tag inside any Astro
component guarantees Astro bundles and injects the CSS correctly.

## Commands
```bash
npm run dev      # dev server → http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build locally
bash scripts/download-images.sh  # download all images from live WP site (run once)
```

## Page sections (in order)
1. **Nav** — fixed, white, Yanone Kaffeesatz uppercase links, mobile hamburger
2. **Hero** — 3-image carousel, auto-advances 5s, prev/next arrows, dot nav
3. **About** — single paragraph, centered, max-width 820px
4. **Two-col photos** — CSS grid 1fr 1fr, 400px height, object-fit cover
5. **Services** — tabbed pricing tables (5 tabs: Eyelashes, Skin Care, Facial Waxing, Body Waxing, Hair Care)
6. **Team** — 4-up grid on dark (#111) background (Mia, Katy, Elisha, Dori)
7. **Contact** — Google Maps iframe (left 2fr) + contact details (right 1fr), black background
8. **Footer** — right-aligned copyright line, black background

## Images
| File | Source URL |
|------|-----------|
| `header.png` | `.../uploads/2017/09/header.png` |
| `salon-1.jpg` | `.../uploads/2017/09/CB_20151218-Sapphire-Salon_6537.jpg` |
| `salon-2.jpg` | `.../uploads/2017/09/CB_20151218-Sapphire-Salon_6693.jpg` |
| `salon-3.jpg` | `.../uploads/2017/09/CB_20151218-Sapphire-Salon_6632.jpg` |
| `team-mia.jpg` | `.../uploads/2023/05/Resized_Resized_20230721_124627.jpg` |
| `team-katy.jpg` | `.../uploads/2017/09/CB_20150228-Sapphire-Salon-Katy_1750.jpg` |
| `team-elisha.jpg` | `.../uploads/2017/09/CB_20141006-Sapphire-Salon_9651.jpg` |
| `team-dori.jpg` | `.../uploads/2016/03/CB_20141006-Sapphire-Salon_9641.jpg` |

Full source URLs are in `scripts/download-images.sh`.

## Content data (in index.astro frontmatter)
- `const team = [...]` — array of 4 team members with name, img path, bio
- `const heroSlides = [...]` — array of 3 hero slide objects

## Styling conventions
- Body font: `Arial, Helvetica, sans-serif`
- Heading/nav font: `'Yanone Kaffeesatz', sans-serif`
- Nav height: `55px`, fixed at top → `margin-top: 55px` on `.hero`
- Dark section bg: `#111` (team), `#000` (contact, footer)
- Tab active state: white bg, `border-bottom: 2px solid #fff`, z-index 1
- Responsive breakpoints: `900px` (team 4→2 col, contact stacks), `640px` (mobile nav)
- Do NOT use `!important` — specificity issues should be solved by selector order

## JavaScript conventions
- All JS is in one `<script>` block at the bottom of `index.astro`
- Mobile nav: toggle `.open` class on `#navLinks`
- Carousel: translate `#heroTrack` with `translateX(-${cur * 100}%)`
- Tabs: toggle `.active` on `.tab-btn` and `.tab-panel`, match via `data-tab` → `id="tab-${data-tab}"`
- No libraries, no npm packages beyond Astro itself

## Deployment
- Vercel project connects to GitHub repo, auto-deploys `main`
- No environment variables needed — fully static
- Domain DNS: CNAME `www` → `cname.vercel-dns.com`, A `@` → `76.76.21.21`

## Known issues / gotchas
- `public/images/` is empty in the repo — run `download-images.sh` after cloning
- The original WP site used RevSlider (jQuery plugin) for tabs and a Slick carousel for the team section; both are replaced with vanilla JS
- No contact form on the original site; none here either — add Formspree if needed
- Google Maps embed uses a static API-key-free embed URL from 2017 — works fine

## Out of scope
- No CMS, no blog, no e-commerce, no contact form (currently)
- No TypeScript (plain JS in script blocks is fine for this project size)
- No Astro integrations (React, Vue, etc.) needed
