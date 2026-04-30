# Magnific Image Prompts — Eliyahu for Artlist

Generate at **1920×1080** (16:9) on Magnific.com. Use **Magnific Precision** model. Drop output files into `public/` with the **exact filenames** below — Claude will wire them up to the right sections after you have them.

Color palette to mention in prompts (already baked in below):
- Cream parchment: `#F0E5D2`
- Deep wine red: `#4A1626`
- Magenta accent: `#E8398F`
- Near-black warm ink: `#1A0E0E`

---

## 1. `public/hero-home.jpg` — Home page Hero background

> Cinematic wide shot, 1920×1080. A solitary figure of a music producer standing on a dark wine-red cliff at golden hour, silhouetted against a deep maroon sky with hints of magenta and orange bleeding through clouds. The figure faces away from camera, headphones around neck, hand raised holding a small glowing device. Atmospheric haze. Diagonal magenta light streak cutting across the frame from upper-right. Mood: confident, aspirational, cinematic. Style: editorial photography, Annie Leibovitz lighting, Magnific.com aesthetic. No text.

**Where it goes:** background fill of the Hero section, behind the wine gradient.

---

## 2. `public/cta-home.jpg` — "Let's spend 30 minutes" CTA background

> Cinematic wide shot, 1920×1080. A figure standing on the edge of a cliff at sunset, photographed from below, silhouetted against a magenta-pink sky transitioning to deep wine red. Long shadows. One bright magenta diagonal line crossing the sky like a laser. Mood: decisive, ready, on the threshold. Style: editorial cinematic photography, dramatic backlight. No text.

**Where it goes:** behind the home-page CTA section ("Let's spend 30 minutes together").

---

## 3. `public/launch-hero.jpg` — /launch Hero background

> Cinematic wide shot, 1920×1080. A close-up of a video editor's desk at night — multiple monitors glowing with timeline waveforms in magenta and cream, a hand on a control surface. Warm ink-black surfaces with deep wine highlights. Bokeh of pink-magenta studio lights in the background. Atmospheric, productive, focused. Style: cinematic editorial photography, moody warm tones, Magnific aesthetic. No text, no logos.

**Where it goes:** behind the Artlist Sync™ launch hero.

---

## 4. `public/launch-cta.jpg` — /launch "Be Sync" final CTA

> Cinematic wide shot, 1920×1080. A figure standing on a cliff edge at sunset, arms slightly raised, silhouetted against a deep wine-red and magenta sky. A single bright magenta diagonal light beam cutting across the sky. Mood: triumphant, decisive, on the verge. Style: editorial cinematic photography matching Magnific.com's "Be Magnific" hero. No text.

**Where it goes:** behind the /launch page's final CTA section ("Be Sync.").

---

## 5. `public/section-break-music.jpg` — Optional section divider for AboutMe

> Cinematic wide shot, 1920×1080. Hands at a Cubase mixing console, glowing knobs in magenta and amber, deep wine-red ambient light, blurred sheet music in the foreground. Mood: intimate, professional, multidisciplinary. Style: warm editorial photography. No text.

**Where it goes:** optional full-bleed banner above or below the AboutMe section to break up the cream sections.

---

## 6. `public/og-magnific.jpg` — New Open Graph image for the site

> 1920×1080. Strong serif word "Eliyahu" in cream parchment color on a deep wine-red background, with a magenta diagonal accent line cutting from corner to corner. Below in smaller sans-serif: "Frontend Developer · for Artlist". Minimal, bold, editorial. Style: typographic poster.

**Where it goes:** replaces the dynamic OG image generation. Update `metadata.openGraph.images` in `src/app/layout.tsx`.

---

## After you generate

1. Save each at the **exact filename** shown above into `public/`.
2. Tell me "images ready" and I'll wire each one into the right section as a full-bleed background, with a dark overlay so the typography stays readable.
3. If any prompt needs tweaking (e.g., different mood, simpler composition), tell me what to change before re-running it.

## Quick prompt-shortening tip for Magnific

If a prompt gets rejected for length, drop everything after "Style:" — the visual brief is what matters most. Magnific Precision honours the first 200-ish tokens best.
