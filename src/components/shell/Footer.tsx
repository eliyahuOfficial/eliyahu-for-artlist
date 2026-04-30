"use client";

import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";

const STACK = [
  "React 19",
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "Framer Motion",
  "GSAP + ScrollTrigger",
  "Vite",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis (Upstash)",
  "BullMQ",
  "Remotion",
  "Zustand",
  "React Query",
  "Radix UI",
  "Socket.io",
  "WebRTC",
  "PWA",
  "Cloudinary",
  "Supabase",
  "html2canvas",
  "Leaflet",
  "Puppeteer",
  "Sharp",
  "VAPID Web Push",
];

const APIS = [
  "OpenAI · GPT-4o",
  "OpenAI · gpt-image-1",
  "Google Gemini",
  "Gemini · Imagen 3",
  "Gemini · Veo 2",
  "Gemini · Nano Banana",
  "Runway",
  "FAL · FLUX Pro",
  "FAL · Kontext",
  "ElevenLabs · TTS",
  "Suno AI · music",
  "HeyGen · avatars",
  "Sync Labs · lip sync",
  "Kling AI · video",
  "BytePlus · SeeDance",
  "Cloudinary",
  "Resend",
  "TikTok OAuth",
  "Meta Graph API",
  "Stripe",
];

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="bg-card-dark text-paper">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        {/* Brand block */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-magenta text-[12px] font-bold text-white">
              E
            </span>
            <span className="launch-display text-[24px] text-paper">
              Eliyahu Levi
            </span>
          </span>
          <p className="mt-5 text-[14px] leading-relaxed text-paper/65">
            Frontend developer & music producer in Tel Aviv. Application page for the
            Marketing Technology team at Artlist.
          </p>
        </div>

        {/* Three columns of links */}
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <FooterCol title={locale === "he" ? "מוצרים" : "Work"}>
            <FooterLink href="https://felora.app">FELORA</FooterLink>
            <FooterLink href="https://lumood.app">Lumood</FooterLink>
            <FooterLink href="#work">Project Triton</FooterLink>
            <FooterLink href="https://shirafeder.co.il">Client work</FooterLink>
          </FooterCol>

          <FooterCol title={locale === "he" ? "צור קשר" : "Get in touch"}>
            <FooterLink href={`mailto:${site.email}`}>Email</FooterLink>
            <FooterLink href={site.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={site.github}>GitHub</FooterLink>
            <FooterLink href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`}>
              WhatsApp
            </FooterLink>
          </FooterCol>

          <FooterCol title={locale === "he" ? "מוזיקה" : "Music"}>
            <FooterLink href={site.spotifyArtistA}>Spotify · Eliyahu (IL)</FooterLink>
            <FooterLink href={site.spotifyArtistB}>Spotify · alias B</FooterLink>
          </FooterCol>
        </div>

        {/* Stack pills */}
        <div className="mt-16 border-t border-paper/10 pt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-magenta">
            {locale === "he" ? "סטאק" : "Stack"}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {STACK.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        {/* APIs pills */}
        <div className="mt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-magenta">
            {locale === "he" ? "ממשקי API" : "APIs"}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {APIS.map((a) => (
              <Pill key={a}>{a}</Pill>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 border-t border-paper/10 pt-8">
          <div className="flex flex-col gap-4 text-[12px] text-paper/50 md:flex-row md:items-center md:justify-between">
            <p>{pick(copy.footer.rights, locale)}</p>
            <p>© {new Date().getFullYear()} Eliyahu Levi · Built for Artlist</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-magenta">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isHttpExternal = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(isHttpExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        className="text-[14px] text-paper/75 transition-colors hover:text-paper"
      >
        {children}
      </a>
    </li>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 text-[11.5px] font-medium text-paper/80">
      {children}
    </span>
  );
}
