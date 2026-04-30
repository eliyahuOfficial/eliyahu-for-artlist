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
    <section id="launch" className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 md:p-14">
        {/* Decorative SVG marker */}
        <Marker />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-fuchsia-200">
                <Sparkles className="size-3.5" aria-hidden />
                {pick(copy.pearl.eyebrow, locale)}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                {pick(copy.pearl.title, locale)}
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base text-white/65 md:text-lg">
                {pick(copy.pearl.subtitle, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/launch"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  {pick(copy.pearl.cta, locale)}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
                >
                  <GithubMark className="size-4" aria-hidden />
                  {pick(copy.pearl.cta_source, locale)}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-white/55">
                <Spec label="Next.js 16" />
                <Spec label="App Router · SSG + ISR" />
                <Spec label="GSAP ScrollTrigger" />
                <Spec label="Framer Motion" />
                <Spec label="Lighthouse 95+" />
                <Spec label="A/B via URL param" />
              </div>
            </Reveal>
          </div>

          {/* Preview card mock */}
          <Reveal delay={0.16}>
            <motion.div
              initial={{ rotate: -1.5 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/30 via-violet-600/20 to-orange-500/30 p-1"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
                <motion.div
                  className="absolute -left-1/3 top-1/4 h-72 w-[180%] -rotate-6 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                      Coming up
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      Artlist <span className="gradient-text">Sync™</span>
                    </p>
                    <p className="mt-1 text-xs text-white/55">A launch page mock</p>
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
    <span className="inline-flex items-center gap-1.5">
      <span className="size-1 rounded-full bg-fuchsia-400" />
      {label}
    </span>
  );
}

function Marker() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute right-8 top-8 size-24 opacity-30 md:right-14 md:top-14 md:size-36"
      viewBox="0 0 200 200"
    >
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5f9e" />
          <stop offset="100%" stopColor="#5cf6ff" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#mg)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="55" fill="none" stroke="url(#mg)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="url(#mg)" strokeWidth="0.6" />
    </svg>
  );
}
