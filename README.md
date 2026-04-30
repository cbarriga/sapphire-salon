# Sapphire Salon NH — Astro

Static brochure site for Sapphire Salon in Hudson, NH.
Converted from WordPress / WPMUDEV to **Astro 4 + Vercel**.
Cost: $0/month (Vercel free tier). Only cost is domain renewal (~$15/yr).

---

## Developer setup (new machine)

### 1. Clone the repo

```bash
git clone https://github.com/cbarriga/sapphire-salon.git
cd sapphire-salon
```

### 2. Prerequisites

| Tool    | Version                     | Install                                                 |
| ------- | --------------------------- | ------------------------------------------------------- |
| Node.js | 22.x                        | [nodejs.org](https://nodejs.org) or via nvm (see below) |
| npm     | 10.x (bundled with Node 22) | —                                                       |
| Git     | any recent                  | [git-scm.com](https://git-scm.com)                      |

**Recommended: use nvm to manage Node versions**

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart your terminal, then:
nvm install   # reads .nvmrc → installs Node 22
nvm use       # switches to Node 22
```

### 3. Install dependencies

```bash
npm install
```

This downloads all images into `public/images/`. You only need to run this once (or again if the source images change).

### 5. Start the dev server

```bash
npm run dev   # → http://localhost:4321
```

The dev server hot-reloads on file save. You're ready to develop.

---

## VSCode setup

Open the project folder in VSCode and install the recommended extensions when prompted
(**"Install workspace recommended extensions"**). If the prompt doesn't appear:

1. Open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Run **"Extensions: Show Recommended Extensions"**
3. Install all extensions under **Workspace Recommendations**

| Extension                                         | Purpose                                                 |
| ------------------------------------------------- | ------------------------------------------------------- |
| Astro (`astro-build.astro-vscode`)                | Syntax highlighting and IntelliSense for `.astro` files |
| Prettier (`esbenp.prettier-vscode`)               | Code formatting                                         |
| Auto Rename Tag (`formulahendry.auto-rename-tag`) | Keeps HTML open/close tags in sync                      |
| HTML CSS Support (`ecmel.vscode-html-css`)        | CSS class name autocomplete in HTML                     |

Project settings (`.vscode/settings.json`) automatically enable format-on-save and consistent line endings.

---

## Daily workflow

```bash
# Make changes to src/ files, then:
git add -A
git commit -m "describe what you changed"
git push
```

Every push to `main` auto-deploys to production via Vercel. Check status at [vercel.com/dashboard](https://vercel.com/dashboard).

**Preview locally before pushing:**

```bash
npm run build    # production build → dist/
npm run preview  # serve dist/ at http://localhost:4321
```

---

## Where to edit content

| Section        | File                                                           | What to look for          |
| -------------- | -------------------------------------------------------------- | ------------------------- |
| About text     | [src/components/About.astro](src/components/About.astro)       | paragraph text            |
| Prices         | [src/components/Services.astro](src/components/Services.astro) | table rows                |
| Team bios      | [src/components/Team.astro](src/components/Team.astro)         | `team` array              |
| Contact info   | [src/components/Contact.astro](src/components/Contact.astro)   | address / phone / hours   |
| Colors / fonts | [src/layouts/Layout.astro](src/layouts/Layout.astro)           | `<style is:global>` block |
| Hero slides    | [src/components/Hero.astro](src/components/Hero.astro)         | `heroSlides` array        |
| Navigation     | [src/components/Nav.astro](src/components/Nav.astro)           | nav links                 |

---

## Connect to Vercel (one-time, for a new Vercel account)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** → select `cbarriga/sapphire-salon`
3. Leave all defaults (Astro is auto-detected) → click **Deploy**
4. After deploy: **Settings → Domains** → add `sapphiresalonnh.com`

To link your local clone to the Vercel project (enables `vercel dev` and preview URLs):

```bash
npm install -g vercel   # install Vercel CLI once
vercel link              # follow prompts to select your project
```

---

## Project structure

```
sapphire-salon/
├── .vscode/
│   ├── extensions.json   # recommended extensions (auto-prompt on open)
│   └── settings.json     # format-on-save, line endings, etc.
├── public/
│   └── images/           # static images (not in git — run download-images.sh)
├── scripts/
│   └── download-images.sh
├── src/
│   ├── layouts/
│   │   └── Layout.astro  # HTML shell + all global CSS
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Team.astro
│   │   └── Contact.astro
│   └── pages/
│       └── index.astro   # imports Layout + all components
├── .gitignore
├── .nvmrc                # pins Node version to 22
├── astro.config.mjs
├── package.json
└── package-lock.json
```

---

## CSS note

All CSS lives in `<style is:global>` inside `Layout.astro`. Do **not** create a separate
`src/styles/global.css` with a `<link>` tag — Astro does not serve files from `src/` as
static assets, which causes a 404.
