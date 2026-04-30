"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubMark } from "@/components/icons/GithubMark";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { Reveal } from "@/components/motion/Reveal";

export function MockLaunchPreview() {
  const { locale } = useLocale();

  return (
    <section
      id="launch"
      className="relative mx-auto w-full max-w-7xl px-5 pt-12 pb-28 md:pt-20 md:pb-40"
    >
      {/* Magnific-style two-column hero card */}
      <div className="relative grid gap-0 overflow-hidden rounded-[40px] border border-white/6 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — paper-cream side with dark text (Magnific signature) */}
        <div className="relative bg-paper p-10 md:p-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft">
              <Sparkles className="size-3.5 text-magenta" aria-hidden />
              {pick(copy.pearl.eyebrow, locale)}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="launch-display mt-7 text-balance text-[36px] sm:text-[48px] md:text-[64px] text-ink">
              {pick(copy.pearl.title, locale)}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-muted md:text-lg">
              {pick(copy.pearl.subtitle, locale)}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/launch"
                className="launch-cta-pink inline-flex h-13 items-center gap-2 px-7 py-4 text-sm font-semibold"
              >
                {pick(copy.pearl.cta, locale)}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href="https://github.com/eliyahuOfficial/eliyahu-for-artlist"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-ink/15 bg-paper-warm px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-paper-deep"
              >
                <GithubMark className="size-4" aria-hidden />
                {pick(copy.pearl.cta_source, locale)}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-2.5 text-[12px] text-ink-muted sm:grid-cols-3">
              <Spec label="Next.js 16" />
              <Spec label="App Router · SSG + ISR" />
              <Spec label="GSAP ScrollTrigger" />
              <Spec label="Framer Motion" />
              <Spec label="Lighthouse 95+" />
              <Spec label="A/B via URL param" />
            </ul>
          </Reveal>
        </div>

        {/* Right — wine-gradient side with mock product visual */}
        <div className="launch-hero-bg relative isolate overflow-hidden p-10 md:p-16">
          <DiagonalAccents />

          <Reveal delay={0.16}>
            <motion.div
              initial={{ rotate: -1.5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl border border-paper/15 bg-card-dark p-1 shadow-[0_30px_120px_-20px_rgba(232,57,143,0.5)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-card-dark">
                <motion.div
                  className="absolute -left-1/3 top-1/4 h-72 w-[180%] -rotate-6 bg-linear-to-r from-transparent via-paper/8 to-transparent"
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-paper/45">
                      Coming up
                    </p>
                    <p className="launch-display mt-3 text-[36px] text-paper">
                      Artlist <span className="text-magenta">Sync™</span>
                    </p>
                    <p className="mt-2 text-xs text-paper/55">A launch page mock</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Spec({ label }: { label: string }) {
  return (
    <li className="inline-flex items-center gap-2">
      <span className="size-1 rounded-full bg-magenta" />
      {label}
    </li>
  );
}

function DiagonalAccents() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      preserveAspectRatio="none"
      viewBox="0 0 800 1000"
    >
      <line
        x1="-100"
        y1="1100"
        x2="700"
        y2="-100"
        stroke="rgba(232, 57, 143, 0.7)"
        strokeWidth="1.5"
      />
      <line
        x1="200"
        y1="1200"
        x2="1000"
        y2="0"
        stroke="rgba(232, 57, 143, 0.4)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
