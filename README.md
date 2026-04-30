# Eliyahu — for Artlist

A Next.js 16 landing page built as the application for the Frontend Developer role on the Marketing Technology team at Artlist.

## What it is

Three things in one project:

1. **A landing page** at `/` — the application proper. Hero, "What I built solo" (three product cards), preview of the mock launch page, "Why me" reasons, contact CTA. Hebrew + English with RTL toggle. Framer Motion for entrance animations.

2. **A mock product launch page** at `/launch` — a hypothetical "Artlist Sync" tool (auto-music-to-video sync). Pinned horizontal scroll storytelling with **GSAP ScrollTrigger**, an ISR-fetched pricing table revalidating every 60 seconds, and an A/B variant served via `?v=a|b` URL parameter. Full SSG.

3. **A reproducible artifact** — clean source so a hiring engineer can read every decision.

## Tech

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **Framer Motion** for entrance + interaction animations
- **GSAP + ScrollTrigger** for the launch page's pinned scroll narrative
- **Lucide** icons
- **next/og** for a generated Open Graph image
- **Vercel Analytics**

## Stack decisions worth flagging

- The launch page is **fully static** (`revalidate: 60`). Pricing data is imported from a typed module, and the same module backs `/api/sync-pricing` — so the API route demonstrates ISR, but the page doesn't need a network round-trip at request time.
- A/B variant lives in a **client child component** behind `<Suspense>` so the parent page can stay SSG. Switching to `searchParams` on the server would have flipped it to dynamic rendering.
- **Locale state is client-side** with a localStorage fallback. For a single-page application this beats `next-intl` routing on bundle size and complexity. The `<html lang dir>` attributes are updated on toggle so SEO tools see the right language.
- **OG image** is generated at build via `app/opengraph-image.tsx` — no PNG to maintain.
- **Reduced motion** is respected throughout: every animation is gated by `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

`NEXT_PUBLIC_SITE_URL` is optional in development. Set it on Vercel to your production domain for canonical URLs and the JSON-LD `Person` schema.

## Deploy

Push to GitHub. Connect to Vercel. That's it — no env vars required for a working preview. Add `NEXT_PUBLIC_SITE_URL=https://your-domain.tld` for production.

## File map (the load-bearing parts)

```
src/
├── app/
│   ├── layout.tsx                 root metadata, JSON-LD Person, Aurora background
│   ├── page.tsx                   composes Hero → WhatIBuilt → MockLaunchPreview → WhyMe → CTA
│   ├── globals.css                design tokens (Tailwind v4 @theme), aurora, gradients
│   ├── opengraph-image.tsx        runtime OG image generator
│   ├── sitemap.ts / robots.ts     SEO essentials
│   ├── api/sync-pricing/route.ts  ISR demo endpoint
│   └── launch/
│       ├── page.tsx               static launch page with ISR pricing
│       ├── layout.tsx             scoped metadata
│       └── _components/           hero · scroll-pinned demo · features · pricing · CTA
├── components/
│   ├── motion/                    Reveal, MagneticButton — the motion primitives
│   ├── shell/                     Navbar, Footer, LangSwitch
│   ├── icons/GithubMark.tsx       custom inline GitHub mark
│   └── sections/                  the five sections of the main page
├── content/
│   ├── copy.ts                    every line of marketing copy, en + he
│   └── projects.ts                FELORA / MoodAI / Project Triton metadata
├── data/pricing.ts                source of truth for /launch pricing
└── lib/
    ├── site.ts                    name, links, locale tokens — fill placeholders here
    ├── locale-context.tsx         RTL/LTR toggle with localStorage persistence
    └── cn.ts                      classnames merge
```

## Before publishing

Edit `src/lib/site.ts` and replace the `TODO` placeholders with:

- Production URL once Vercel gives you one
- LinkedIn URL
- GitHub URL
- WhatsApp number (digits only with country code)
- Calendly URL (or leave empty — the CTA hides the "Book a call" button if empty)
- SoundCloud / Spotify artist links

`OUTREACH.md` contains pre-written cold messages (LinkedIn DM, email, public LinkedIn post) in Hebrew and English. Replace `{{LANDING_URL}}`, `{{LAUNCH_URL}}`, `{{REPO_URL}}`, `{{RECRUITER_NAME}}`, `{{HM_NAME}}` before sending.

## Author

**Eliyahu Levi** — Tel Aviv. Front-end engineer and music producer (Eliyahu IL).

- eliyahuofficialmusic@gmail.com
- [eliyahu-for-artlist.vercel.app](https://eliyahu-for-artlist.vercel.app)

This page is a one-purpose portfolio — built specifically as the application package for Artlist. Everything in it is honest: the projects exist, the numbers are counted from the code, the page itself is the proof of work.
