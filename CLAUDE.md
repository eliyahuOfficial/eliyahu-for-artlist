@AGENTS.md

# Project: Eliyahu for Artlist — context for the next Claude session

This file is the handover. Read it before doing anything else.

## What this project is

A **single-purpose Next.js 16 landing page** built as the application package for the **Frontend Developer · Marketing Technology** role at **Artlist** (artlistjobs.io). It is **not** a generic portfolio. Every decision was made to do one job: get Eliyahu to a 30-minute call with the hiring team.

The user (Eliyahu Levi) is hands-on but might come back days/weeks later. Treat this as a real production deliverable, not a sandbox.

## Who Eliyahu is (only the parts that affect what we ship here)

- **Full name:** Eliyahu Levi (Tel Aviv). Earlier I once miscalled him "Eliyahu Steinberg" — that was wrong. The "steiberg codes.pdf" on his Desktop is named after the Cubase/Steinberg music company; it is not his surname. Never reintroduce that mistake.
- **Day job:** Frontend developer at **Iconiq** for ~1 year (consumer app — repo at `C:\Users\User\Downloads\iconiq-server`). FELORA is his solo side project / dream.
- **Music identity:** producer/artist as **Eliyahu (IL)**. Two Spotify artist profiles (both embedded on the page). Cubase 12, HISE, VST work.
- **Other side income:** WordPress + Elementor Pro client sites — relevant marketing-tech context that the copy plays on.
- **5 years writing code** total (3 self-taught before HackerU, 2 since).
- **Communication:** Hebrew preferred. Decisive recommendations preferred over hedged options. He explicitly asked to be "surprised" at the start of this project — he's a sparring partner, not someone who needs hand-holding.

## Tech stack (don't change without a reason)

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19.2**
- **TypeScript** (strict, `noEmit`)
- **Tailwind CSS v4** (CSS-first config inside `src/app/globals.css` `@theme` block)
- **Framer Motion v12** for entrance + interaction animations
- **GSAP 3 + ScrollTrigger** for the `/launch` pinned-scroll storytelling
- **Lucide React v1.x** (note: v1 dropped some brand icons — there is no `Github` icon, use `src/components/icons/GithubMark.tsx`)
- **next/og** for the runtime OG image
- **Vercel Analytics**
- **next-intl** is installed but **not used** — the app uses a homegrown client-side `LocaleProvider` in `src/lib/locale-context.tsx`. Keep it that way for a one-page site; if the project grows, migrate to next-intl with `[locale]` routing.

## How the project is organized

```
src/
├── app/
│   ├── layout.tsx               # root metadata, JSON-LD, Aurora bg, fonts
│   ├── page.tsx                 # composes the home sections in order
│   ├── globals.css              # Tailwind v4 @theme + aurora + tokens
│   ├── opengraph-image.tsx      # runtime OG image (Satori — explicit display:flex on every parent)
│   ├── sitemap.ts / robots.ts
│   ├── api/sync-pricing/route.ts # static API route (revalidate=60) — backed by src/data/pricing.ts
│   └── launch/
│       ├── layout.tsx           # scoped metadata
│       ├── page.tsx             # SSG with `export const revalidate = 60`
│       └── _components/         # LaunchHero, LaunchScrollDemo (GSAP), LaunchFeatures, LaunchPricing, LaunchCTA, LaunchTopBanner
├── components/
│   ├── motion/                  # Reveal, RevealStagger, RevealItem, MagneticButton
│   ├── shell/                   # Navbar (scroll-aware), Footer, LangSwitch
│   ├── icons/GithubMark.tsx     # inline GitHub mark
│   └── sections/                # Hero, WhatIBuilt (FELORA featured), MockLaunchPreview, AboutMe, WhyMe, CTA
├── content/
│   ├── copy.ts                  # ALL marketing copy, bilingual (en + he). Always edit copy here, not inline in components.
│   └── projects.ts              # FELORA / MoodAI / Project Triton metadata. FELORA has `featured: true`.
├── data/pricing.ts              # source of truth for /launch pricing
└── lib/
    ├── site.ts                  # name, links, locale tokens — fill in any missing personal fields here
    ├── locale-context.tsx       # client RTL/LTR toggle with localStorage persistence
    └── cn.ts                    # tailwind-merge + clsx wrapper
```

### Section order on `/`
1. Navbar (scroll-aware backdrop)
2. Hero (aggressive headline: "Most developers build pages. I ship marketing systems that feel like products.")
3. WhatIBuilt — FELORA in a **featured oversized card** with pull-quote, then MoodAI + Triton in a 2-col grid
4. MockLaunchPreview — kicker that links to `/launch`
5. AboutMe — photo + 3 stats + Spotify embed
6. WhyMe — 4 reason cards
7. CTA — WhatsApp + email (Calendly is hidden when `site.calendly === ""`)
8. Footer

### Section order on `/launch`
1. LaunchTopBanner (announces the meta — "this is a 48h build by Eliyahu Levi")
2. Header with back link
3. LaunchHero (mouse-tilt visual, A/B variant via `?v=a|b`, parallax timeline mock)
4. LaunchScrollDemo (**GSAP ScrollTrigger pinned horizontal scroll** of 4 steps — load-bearing demo)
5. LaunchFeatures (6 tiles)
6. LaunchPricing (3 plans, fetchedAt timestamp visible to demo ISR)
7. LaunchCTA (email capture)

## Critical conventions

1. **All copy lives in `src/content/copy.ts`.** Never inline strings in section components. The pattern is `pick(copy.x.y, locale)` for sentences and `pickL(obj, locale)` for project metadata. Keeping copy centralized is what makes the EN/HE toggle clean.
2. **The featured FELORA emphasis is intentional.** The user explicitly asked to make FELORA the killer. If you redesign the work section, FELORA must remain the visual headliner. Don't flatten the layout to "3 equal cards" again.
3. **Static rendering is non-negotiable.** Every route must be `○ (Static)` in the build output. The launch page uses a Suspense-wrapped client child for `useSearchParams`; don't move A/B logic to the server side or it'll flip the route to dynamic. Pricing is imported from `src/data/pricing.ts` (not fetched), with the API route serving the same data.
4. **Reduced motion is always respected** (`@media (prefers-reduced-motion: reduce)` in `globals.css` plus an explicit guard in the GSAP setup).
5. **Lucide icons.** This is **lucide-react v1.x** which is missing some brand icons. If you need GitHub use `<GithubMark />`. If something is missing, write a small inline SVG component in `src/components/icons/`.
6. **Hebrew + English everywhere.** Every new copy field must have both. The `<html lang dir>` is updated at runtime by `LocaleProvider` based on `locale === "he"`. RTL must look intentional, not flipped — test the Hebrew toggle on every section you add.
7. **Tailwind v4 syntax.** No `tailwind.config.js` — design tokens live in `globals.css` under `@theme`. Custom utilities like `.glass`, `.aurora`, `.gradient-text` are defined there. Don't add `tailwind.config.js`.

## State of the deliverable

✅ Functional. `npm run build` passes with all 9 routes static. Production server boots in ~270ms. All sections rendered. Bilingual EN/HE. ISR demo on `/launch` working. OG image generates.

### Live URLs already linked from the page
- **FELORA** → https://felora.app (the headline product)
- **Lumood** (was "MoodAI") → https://lumood.app
- **shirafeder.co.il** → an example WordPress + Elementor client build (in the "Client work" strip below the project cards)


❌ Not yet done by Eliyahu (the user must do these manually before publishing):
- Replace `public/eliyahu.jpg` (currently 2.6KB — clearly a thumbnail) with a high-res profile photo (≥800×800)
- Push to GitHub as `eliyahu-for-artlist` and connect to Vercel
- Set `NEXT_PUBLIC_SITE_URL=https://eliyahu-for-artlist.vercel.app` env var on Vercel
- Fill `{{LANDING_URL}}`, `{{LAUNCH_URL}}`, `{{REPO_URL}}`, `{{RECRUITER_NAME}}` in `OUTREACH.md` once URLs exist
- Build the one-page CV PDF per the spec in `OUTREACH.md` section 5
- Decide whether to add Calendly — if yes, set `site.calendly` and the CTA button reappears
- Optionally: record the 60s "Why me" video and embed it inside the AboutMe or WhyMe section

## Likely next-session asks and how to handle them

- **"Make this section better / different"** → first read the section's copy in `src/content/copy.ts`, then the component. Discuss change before editing — Eliyahu has strong taste and will push back if you over-engineer.
- **"Add an Artlist-specific page / variant"** → Use the `/launch` page as a template for creating new mock product pages. Keep them under `src/app/<slug>/` with their own `_components` folder.
- **"Localize a new string"** → Add to `src/content/copy.ts` with `t("en text", "he text")`. Always both. If a Hebrew translation is uncertain, leave a `// TODO(he):` comment and ask.
- **"Help me with the CV / outreach"** → `OUTREACH.md` already has the LinkedIn DM, email, and public post drafted in EN+HE. Edit there, not in fresh files.
- **"Deploy / push to GitHub / set up Vercel"** → Walk through the steps; do NOT push code or change git remotes without explicit confirmation each time.
- **"This isn't aggressive enough" / "the headline is weak"** → Eliyahu has already pushed once for a more aggressive headline. The current title in `copy.ts` reads "Most developers build pages. / I ship marketing systems / that feel like products." Anything more aggressive is fine; anything softer is regression — push back.

## What NOT to do

- **Don't add a CV builder, blog system, or generic portfolio.** This page has one job: getting an interview at Artlist. Scope creep is poison.
- **Don't migrate to next-intl.** It's installed but unused on purpose. The home-rolled LocaleProvider is right for a single-page site.
- **Don't replace Tailwind v4 with v3.** The whole `@theme`-based design system depends on v4.
- **Don't introduce `process.env` reads on the client side.** All env vars used here (`NEXT_PUBLIC_SITE_URL`) are read in server components or build-time only.
- **Don't add ESLint rules that would force changes Eliyahu didn't ask for.** Default `next lint` is fine.
- **Don't restructure `src/app/launch/_components/` into a flat folder.** The underscore prefix is intentional — it stops Next.js from treating it as a route.

## Where to find user context

- **Plan that produced this project:** `C:\Users\User\.claude\plans\calm-spinning-hamming.md`
- **User memory (cross-session):** `C:\Users\User\.claude\projects\c--Users-User-Desktop-portfolio\memory\` — has `user_profile.md`, `project_career.md`, `project_felora.md`, `project_other.md`, `feedback_style.md`. Read them before making assumptions.
- **Reference repos to lift patterns from:**
  - `C:\Users\User\Desktop\flora.ai` — FELORA monorepo (look at `apps/web/src/components/landing/` for hero/pricing animation patterns)
  - `C:\Users\User\Desktop\MoodAI` — only project that uses Framer Motion in production
  - `C:\Users\User\Desktop\Project Triton\section-library` — 322 hand-coded landing-page sections (HTML/CSS), great for steal-with-pride

## Tone for any new copy

- **English:** confident, declarative, no marketing fluff. Verbs first. "I shipped X" beats "I worked on X." Specific numbers beat adjectives.
- **Hebrew:** matching register. Prefer `השקתי` over `עבדתי על`. Don't translate idioms literally — rewrite for natural Hebrew.
- Never write "passionate about" or "synergy" or "stakeholder." If a sentence sounds like a LinkedIn cliché, delete it.
