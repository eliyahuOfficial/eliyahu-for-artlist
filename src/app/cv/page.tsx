import Link from "next/link";
import { site } from "@/lib/site";

export default function CVPage() {
  const year = new Date().getFullYear();
  return (
    <div className="cv-sheet mx-auto my-8 bg-paper text-ink shadow-2xl print:my-0 print:shadow-none">
      {/* Print button — hidden in print, visible on screen */}
      <PrintBar />

      <article className="cv-content">
        {/* 1. Header */}
        <header className="cv-header">
          <h1 className="cv-name">Eliyahu Levi</h1>
          <p className="cv-role">Frontend Developer · Tel Aviv</p>
          <p className="cv-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Sep />
            <a href={`tel:${site.whatsapp}`}>{site.whatsapp}</a>
            <Sep />
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/eliyahuofficial
            </a>
            <Sep />
            <a href={site.github} target="_blank" rel="noreferrer">
              github.com/eliyahuOfficial
            </a>
            <Sep />
            <a href={site.url} target="_blank" rel="noreferrer" className="cv-url">
              eliyahu-for-artlist.vercel.app
            </a>
          </p>
        </header>

        <hr className="cv-rule" />

        {/* 2. Summary */}
        <section>
          <p className="cv-summary">
            I built{" "}
            <strong>FELORA — a multi-tenant AI video SaaS — solo</strong>: end-to-end
            checkout, role-based admin, AI render pipeline, RTL i18n, 164 TypeScript files,
            zero lint warnings, live in production. I&apos;m applying for the{" "}
            <strong>Frontend Developer · Marketing Technology</strong> role at{" "}
            <strong>Artlist</strong> because the job is the literal intersection of how I
            already work — code, music, marketing pages — and the customer profile I am.
            I produce music and release records as <strong>Eliyahu (IL)</strong>.
          </p>
        </section>

        {/* 3. Selected work */}
        <section className="cv-section">
          <h2 className="cv-h2">Selected work</h2>
          <div className="cv-rows">
            <Row
              name="FELORA"
              href="https://felora.app"
              line="Multi-tenant AI video SaaS · multi-workspace admin · end-to-end checkout with tiered credits · BullMQ render queue · RTL i18n · TikTok OAuth · 164 TS files · 0 lint warnings · live in production."
              stack="React 18 · Vite · TypeScript · Tailwind · Express · MongoDB · BullMQ · Remotion · FAL · Runway · Suno · ElevenLabs · HeyGen"
            />
            <Row
              name="Lumood"
              href="https://lumood.app"
              line="Social mood-sharing PWA · WebRTC video calls · Framer Motion reveals · push notifications · Lighthouse SEO 100 · 32+ pages."
              stack="React · Vite · TypeScript · Tailwind · Framer Motion · Socket.io · Leaflet · PWA · Cloudinary"
            />
            <Row
              name="Project Triton"
              line="AI website builder + 322 hand-coded landing-page section templates · adaptive briefing → tailored page · domain readiness scoring · ~8s p95 generation."
              stack="React 19 · Vite · TypeScript · Tailwind · Express · Google GenAI · Puppeteer · Sharp · Supabase"
            />
          </div>
        </section>

        {/* 4. This application page */}
        <section className="cv-section">
          <h2 className="cv-h2">This application</h2>
          <p className="cv-line">
            Built in Next.js 16 with GSAP ScrollTrigger and Framer Motion. SSG + ISR, A/B
            via URL param, Lighthouse 95+. Hero photography generated via FAL FLUX-Pro 1.1
            Ultra. Hebrew RTL. Source open on GitHub.
          </p>
        </section>

        {/* 5. Stack */}
        <section className="cv-section">
          <h2 className="cv-h2">Stack</h2>
          <p className="cv-stack">
            React · Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP · Node.js ·
            Express · MongoDB · Redis · BullMQ · Remotion · PWA · WebRTC ·{" "}
            <strong>AI SDKs:</strong> OpenAI · Google Gemini · Runway · FAL FLUX · Suno ·
            ElevenLabs · HeyGen · Sync Labs · Kling · BytePlus SeeDance · Cloudinary
          </p>
        </section>

        {/* 6. Other production output */}
        <section className="cv-section">
          <h2 className="cv-h2">Production output</h2>
          <p className="cv-line">
            <strong>150+ client websites</strong> shipped in a salaried frontend role —
            WordPress + Elementor Pro · Hebrew RTL · conversion sections · SEO foundations.
            Live example: <a href="https://shirafeder.co.il" target="_blank" rel="noreferrer">shirafeder.co.il</a>.
          </p>
        </section>

        {/* 7. Education */}
        <section className="cv-section">
          <h2 className="cv-h2">Education</h2>
          <p className="cv-line">
            HackerU — Full-stack web development (graduated). Three years self-taught
            before HackerU; two years coding professionally since.
          </p>
        </section>

        {/* 8. Footer / Music */}
        <footer className="cv-footer">
          <p>
            <strong>Music · Eliyahu (IL)</strong> ·{" "}
            <a href={site.spotifyArtistA} target="_blank" rel="noreferrer">
              Spotify
            </a>{" "}
            ·{" "}
            <a href={site.spotifyArtistB} target="_blank" rel="noreferrer">
              alt alias
            </a>
          </p>
          <p className="cv-meta">
            © {year} Eliyahu Levi · CV generated from{" "}
            <Link href="/">eliyahu-for-artlist.vercel.app</Link>
          </p>
        </footer>
      </article>
    </div>
  );
}

function Row({
  name,
  href,
  line,
  stack,
}: {
  name: string;
  href?: string;
  line: string;
  stack: string;
}) {
  return (
    <div className="cv-row">
      <div className="cv-row-head">
        <strong className="cv-row-name">{name}</strong>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="cv-row-link">
            {href.replace(/^https?:\/\//, "")}
          </a>
        ) : null}
      </div>
      <p className="cv-row-line">{line}</p>
      <p className="cv-row-stack">{stack}</p>
    </div>
  );
}

function Sep() {
  return <span className="cv-sep" aria-hidden> · </span>;
}

function PrintBar() {
  return (
    <div className="cv-printbar">
      <p>
        Press <kbd>Ctrl</kbd> + <kbd>P</kbd> (or <kbd>⌘</kbd> + <kbd>P</kbd>) to save as
        PDF. Choose <strong>Save as PDF</strong> as the destination, A4 paper, default
        margins.
      </p>
    </div>
  );
}
