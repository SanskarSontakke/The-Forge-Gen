# The Forge Gen

A landing page and documentation site for The Forge Gen, a personal project/brand by Sanskar Sontakke, built with React, Vite, and Tailwind CSS.

## What it does

Renders a single-page marketing site with sections for projects, services, how-it-works, benefits, a knowledge base, community links, and an about section, plus a separate `#/docs` route with a lazy-loaded setup guide for using a Gemini API key with the project. Routing between the landing page and the docs page is done with the URL hash, no router library.

## Why I built it

A landing page for The Forge Gen project/brand, built as an AI Studio app.

## Tech stack

- React 18 + TypeScript
- Vite (build tool, dev server)
- Tailwind CSS (via CDN script in `index.html`)
- Framer Motion (animations)
- Radix UI (`@radix-ui/react-slot`) and `class-variance-authority` / `clsx` / `tailwind-merge` for component styling
- Lucide React (icons)

## Getting started

```bash
git clone https://github.com/SanskarSontakke/The-Forge-Gen.git
cd The-Forge-Gen
npm install
```

Set `GEMINI_API_KEY` in a `.env.local` file (see the in-app docs at `#/docs` for details), then run:

```bash
npm run dev
```

Other scripts: `npm run build` (production build), `npm run preview` (preview the build).

## How it works

`App.tsx` swaps between the landing page and a lazy-loaded `DocsPage` component based on `window.location.hash`, so the docs bundle is only downloaded when the `#/docs` route is visited. The Vite config (`vite.config.ts`) injects `GEMINI_API_KEY` from the environment into `process.env` at build time and splits vendor/animation/icon code into separate chunks.

## Results / status

Working landing page / learning project.

## License

MIT © 2026 Sanskar Sontakke
