"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Hero() {
  const { locale } = useLocale();
  const c = copy.hero;

  return (
    <section className="relative isolate flex min-h-svh w-full items-center overflow-hidden text-paper">
      {/* Full-bleed hero image + overlays — single layered wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-home-fashion.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Left-to-right wine fade for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-wine-deep/80 via-wine-deep/40 to-transparent" />
        {/* Bottom fade so it blends into next section */}
        <div className="absolute inset-0 bg-linear-to-t from-wine-deep/55 via-transparent to-wine-deep/15" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-paper/85 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta" />
          {pick(c.eyebrow, locale)}
        </motion.div>

        <h1 className="launch-display mt-9 max-w-6xl text-balance text-[44px] sm:text-[60px] md:text-[88px] lg:text-[112px] text-paper">
          <FadeInLine delay={0.05}>{pick(c.title_a, locale)}</FadeInLine>
          <FadeInLine delay={0.18} className="block">
            <span className="text-magenta">{pick(c.title_b, locale)}</span>
          </FadeInLine>
          <FadeInLine delay={0.32} className="block text-paper/75">
            {pick(c.title_c, locale)}
          </FadeInLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-2xl text-pretty text-[16px] leading-relaxed text-paper/75 md:text-lg"
        >
          {pick(c.subtitle, locale)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-3"
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
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-magenta px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-magenta-bright"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
            {pick(c.cta_felora, locale)}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 6, 0] }}
        transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-paper/50"
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

function DiagonalAccents() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      preserveAspectRatio="none"
      viewBox="0 0 1920 1080"
    >
      <line
        x1="-200"
        y1="1300"
        x2="1100"
        y2="-200"
        stroke="rgba(232, 57, 143, 0.55)"
        strokeWidth="1.5"
      />
      <line
        x1="900"
        y1="1300"
        x2="2200"
        y2="-200"
        stroke="rgba(232, 57, 143, 0.4)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
