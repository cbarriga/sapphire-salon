# Sapphire Salon NH — Astro

Converted from WordPress / WPMUDEV to Astro + Vercel.
Cost: $0/month (Vercel free tier). Only cost is domain renewal (~$15/yr).

## First-time setup

```bash
# 1. Download images from the live WP site (run once after cloning)
bash scripts/download-images.sh

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev        # → http://localhost:4321
```

## Connect to Vercel (one-time)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** → select `cbarriga/sapphire-salon`
3. Leave all defaults (Astro is auto-detected) → click **Deploy**
4. After deploy: Settings → Domains → add `sapphiresalonnh.com`

Auto-deploy is enabled automatically — every push to `main` triggers a new deploy.

To link your local environment to the Vercel project (enables `vercel dev` and preview deploys):

```bash
vercel link   # follow prompts to select your project
```

## Deploy workflow

Every push to `main` auto-deploys to production. The normal workflow is:

```bash
# Make your changes to src/pages/index.astro, then:
git add -A
git commit -m "describe what you changed"
git push
```

Vercel will build and deploy automatically. Check status at vercel.com/dashboard.

**Preview before pushing** (optional):

```bash
npm run build    # build locally, check for errors
npm run preview  # → http://localhost:4321 (production build)
```

**Manual deploy** (bypasses GitHub, useful for quick fixes):

```bash
vercel --prod
```

## Update content

Everything is in one file: `src/pages/index.astro`

| Section        | Where to look                  |
|----------------|-------------------------------|
| About text     | `<!-- ABOUT -->` section      |
| Prices         | `<!-- SERVICES -->` section   |
| Team bios      | `const team = [...]` at top   |
| Contact info   | `<!-- CONTACT -->` section    |
| Colors / fonts | `<style is:global>` block     |

## Why one file?

Astro scopes styles to components by default — putting everything in one
`index.astro` with `<style is:global>` ensures the CSS is always bundled
and applied correctly, no path issues.
