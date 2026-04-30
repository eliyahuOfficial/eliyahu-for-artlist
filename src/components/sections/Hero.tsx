"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Hero() {
  const { locale } = useLocale();
  const c = copy.hero;

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* Animated lines backdrop */}
      <BackdropLines />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
          {pick(c.eyebrow, locale)}
        </motion.div>

        <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
          <FadeInLine delay={0.05}>{pick(c.title_a, locale)}</FadeInLine>
          <FadeInLine delay={0.18} className="block">
            <span className="gradient-text">{pick(c.title_b, locale)}</span>
          </FadeInLine>
          <FadeInLine delay={0.32} className="block text-white/80">
            {pick(c.title_c, locale)}
          </FadeInLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg"
        >
          {pick(c.subtitle, locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#work" variant="primary">
            {pick(c.cta_primary, locale)}
            <ArrowDown className="size-4" aria-hidden />
          </MagneticButton>
          <MagneticButton href="#launch" variant="secondary">
            {pick(c.cta_secondary, locale)}
          </MagneticButton>
          <a
            href="#work"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-fuchsia-300/30 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-orange-400/15 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100 hover:from-fuchsia-500/25 hover:via-violet-500/25 hover:to-orange-400/25"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-fuchsia-300" />
            {pick(c.cta_felora, locale)}
          </a>
        </motion.div>

        {/* Audio chip — placeholder; user will drop in real audio + control */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 ps-2 pe-4 text-xs text-white/65 backdrop-blur-md"
        >
          <span className="grid size-7 place-items-center rounded-full bg-white text-black">
            <Play className="size-3.5" aria-hidden />
          </span>
          <span className="hidden sm:inline">{pick(c.audio_label, locale)}</span>
          <span className="inline-flex h-3 items-end gap-[2px] sm:hidden">
            <span className="h-full w-[3px] animate-pulse rounded-full bg-white/60" />
            <span className="h-2/3 w-[3px] animate-pulse rounded-full bg-white/40" />
            <span className="h-1/2 w-[3px] animate-pulse rounded-full bg-white/30" />
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 6, 0] }}
        transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function FadeInLine({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}

function BackdropLines() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="white"
              strokeOpacity="0.16"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#fade)" />
      </svg>

      {/* Drifting orbs */}
      <motion.div
        className="absolute -left-32 top-20 size-96 rounded-full bg-fuchsia-600/30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-1/3 size-[28rem] rounded-full bg-violet-600/30 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-orange-500/25 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
