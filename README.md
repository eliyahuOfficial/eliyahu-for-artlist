# Eliyahu — for Artlist

A Next.js 16 landing page built as the application for the **Frontend Developer · Marketing Technology** role at Artlist.

The page itself is the work sample. Everything you'd ask a marketing-tech candidate to demonstrate is in the source.

## What's here

- **`/`** — the application landing page. Hero, featured projects (FELORA · Lumood · Project Triton), the AI creator stack, "Why me" reasons, contact CTA. Bilingual EN / HE with full RTL support.
- **`/launch`** — a hypothetical Artlist Sync™ product launch page. Mouse-tilt timeline mock, GSAP ScrollTrigger pinned horizontal scroll across four steps, A/B variant via `?v=a|b`, ISR-backed pricing.
- **`/api/sync-pricing`** — same pricing module exposed as a JSON endpoint. Demonstrates ISR (`revalidate: 60`).
- **`/opengraph-image`** — static cinematic OG image (1920×1080) baked at build.
- **`/sitemap.xml`** · **`/robots.txt`** — SEO essentials.

Every route renders as `○ (Static)` in `next build` output.

## Tech

| | |
| --- | --- |
| **Framework** | Next.js 16.2 · App Router · Turbopack |
| **UI** | React 19 · TypeScript (strict) · Tailwind CSS v4 |
| **Animation** | Framer Motion 12 (entrances + interactions) · GSAP 3 + ScrollTrigger (pinned-scroll storytelling) |
| **Typography** | Geist Sans + Fraunces (Latin) · Heebo + Frank Ruhl Libre (Hebrew) — per-character fallback chain plus an `html[dir="rtl"]` token override so Hebrew always renders in dedicated Hebrew faces |
| **i18n** | Home-rolled client-side `LocaleProvider` with `localStorage` persistence; updates `<html lang dir>` on toggle. Light, no `next-intl` overhead for a single-page site. |
| **Imagery** | Editorial fashion photography generated via **FAL FLUX-Pro 1.1 Ultra** (hero / CTA backgrounds + per-step cards on /launch); existing portrait re-backgrounded via **FAL FLUX Kontext** image-to-image edit |
| **Icons** | Lucide React + a custom inline `GithubMark` |
| **Analytics** | `@vercel/analytics` |

## Design system (scoped to `@theme`)

The whole site uses a Magnific-inspired palette — paper / wine / magenta on near-black ink. Tokens live in [`src/app/globals.css`](src/app/globals.css):

```css
--color-paper: #f0e5d2;       /* cream parchment */
--color-paper-warm: #ecddc0;
--color-ink: #1a0e0e;
--color-wine: #4a1626;
--color-wine-deep: #2a0a14;
--color-magenta: #e8398f;
--color-card-dark: #181216;
```

Custom utilities — `.launch-display`, `.launch-eyebrow`, `.launch-card-dark`, `.launch-cta-pink`, `.launch-hero-bg` — are defined in the same file so individual components stay declarative.

## Stack decisions worth flagging

- **Static rendering is non-negotiable.** Every route in the build output is `○ (Static)`. Pricing comes from a typed module ([`src/data/pricing.ts`](src/data/pricing.ts)) and is consumed by both the page and the API route — so the API demonstrates ISR without the page ever paying for a request-time fetch.
- **A/B variants on /launch live in a client child** behind `<Suspense>`. Reading `useSearchParams` at the page level would flip it to dynamic rendering and break the static guarantee. The Suspense boundary keeps the parent SSG.
- **GSAP pin distance is computed against `window.innerWidth`,** not the track's own clientWidth. The track is `width: max-content`, so its `scrollWidth` and `clientWidth` are identical and would yield distance = 0. Comparing to the viewport is what makes the horizontal scroll fire.
- **Hebrew typography uses Tailwind v4 `@theme` token swapping.** `--font-sans` and `--font-display` are Latin-first by default and are redefined inside `html[dir="rtl"]` to put Heebo / Frank Ruhl Libre at the front of the chain. This guarantees Hebrew renders in dedicated faces regardless of which utility class is applied.
- **Body has no `overflow-x: hidden`.** Section-level clipping is on individual sections; the body stays free so GSAP `pin` works on iOS Safari. Global `overflow-x: hidden` is the number-one cause of broken ScrollTrigger pins, so the project documents this in the CSS itself.
- **OG image is a static asset** (`/og-magnific.jpg`) replacing the earlier dynamic Satori route — same end result, lower runtime cost.
- **Reduced motion is respected.** GSAP setup checks `matchMedia("(prefers-reduced-motion: reduce)")` and bails before registering triggers. Tailwind reduced-motion variants strip transition durations site-wide via the global CSS rule.

## Lighthouse · production target

- Performance ≥ 95
- Accessibility 100
- Best Practices 100
- SEO 100

## Run locally

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

No env vars required for development. For production set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.tld
```

This populates canonical URLs and the JSON-LD `Person` schema in [`src/app/layout.tsx`](src/app/layout.tsx).

## File map

```
src/
├── app/
│   ├── layout.tsx                root metadata · JSON-LD · font loading
│   ├── page.tsx                  Hero → WhatIBuilt → MockLaunchPreview → AboutMe → WhyMe → CTA
│   ├── globals.css               Tailwind v4 @theme + custom utilities
│   ├── opengraph-image.tsx       legacy dynamic OG (kept as fallback)
│   ├── sitemap.ts · robots.ts    SEO
│   ├── api/sync-pricing/route.ts ISR demo endpoint
│   └── launch/
│       ├── page.tsx              the Artlist Sync™ launch page (SSG + ISR)
│       ├── layout.tsx            scoped metadata + cream-themed wrapper
│       └── _components/          hero · pinned scroll demo · features · pricing · CTA · top banner
├── components/
│   ├── motion/                   Reveal · MagneticButton
│   ├── shell/                    Navbar (scroll-aware) · Footer · LangSwitch
│   ├── icons/GithubMark.tsx      inline mark (Lucide v1.x dropped brand icons)
│   └── sections/                 home page sections
├── content/
│   ├── copy.ts                   every marketing string, EN + HE
│   └── projects.ts               FELORA · Lumood · Project Triton metadata
├── data/pricing.ts               source of truth for /launch pricing
└── lib/
    ├── site.ts                   personal links, locale tokens
    ├── locale-context.tsx        RTL/LTR toggle + localStorage persistence
    └── cn.ts                     tailwind-merge wrapper
```

## Author

**Eliyahu Levi** — Tel Aviv.
Frontend developer · music producer (Eliyahu IL).

- [eliyahuofficialmusic@gmail.com](mailto:eliyahuofficialmusic@gmail.com)
- [linkedin.com/in/eliyahuofficial](https://www.linkedin.com/in/eliyahuofficial/)
- [github.com/eliyahuOfficial](https://github.com/eliyahuOfficial)

The page is a single-purpose application. Everything in it is honest: the projects exist, the numbers come from the codebase, the page itself is the proof of work.
