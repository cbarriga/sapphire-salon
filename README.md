# Sapphire Salon NH — Astro

Converted from WordPress / WPMUDEV to Astro + Vercel.
Cost: $0/month (Vercel free tier). Only cost is domain renewal (~$15/yr).

## Setup

```bash
# 1. Download images from the live WP site (run once)
bash scripts/download-images.sh

# 2. Install and run locally
npm install
npm run dev        # → http://localhost:4321

# 3. Build
npm run build
```

## Deploy

Push to GitHub, then connect to Vercel:
1. vercel.com → New Project → Import GitHub repo
2. Leave all defaults → Deploy
3. In Vercel dashboard → Settings → Domains → add sapphiresalonnh.com

## Update content

Everything is in one file: `src/pages/index.astro`

| Section   | Find in file                   |
|-----------|-------------------------------|
| About text | `<!-- ABOUT -->` section      |
| Prices     | `<!-- SERVICES -->` section   |
| Team bios  | `const team = [...]` at top   |
| Contact    | `<!-- CONTACT -->` section    |
| Colors/fonts | `<style is:global>` block   |

## Why one file?

Astro scopes styles to components by default — putting everything in one
`index.astro` with `<style is:global>` ensures the CSS is always bundled
and applied correctly, no path issues.
