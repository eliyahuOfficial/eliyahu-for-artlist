"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Crosshair, Gauge, Layers, Magnet, Waves, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  variant: "ink" | "wine" | "magenta" | "paper";
};

const FEATURES: Feature[] = [
  {
    icon: Magnet,
    title: "Stem-aware locking",
    body: "Sync to the kick, the lead, or the vocal — choose which stem owns your edit and only cut against its transients.",
    variant: "ink",
  },
  {
    icon: Crosshair,
    title: "Frame-precise snap",
    body: "Snaps each cut within a single frame of the nearest beat, with a tolerance dial when you want it loose.",
    variant: "paper",
  },
  {
    icon: Waves,
    title: "Swing & feel",
    body: "Bend the grid like a notation engraver. Push the swing, drag the offset — your cuts move with the music.",
    variant: "wine",
  },
  {
    icon: Layers,
    title: "Multitrack reasoning",
    body: "Multiple audio layers, multiple visual angles. Sync resolves them as one timeline, not a stack of unrelated clips.",
    variant: "paper",
  },
  {
    icon: Workflow,
    title: "Plays nice with the rest of Artlist",
    body: "Surfaces tracks from your existing library. Imports stems straight from any subscription. Exports XML to FCP, Premiere, DaVinci.",
    variant: "magenta",
  },
  {
    icon: Gauge,
    title: "Built for fast hands",
    body: "Keyboard-driven everything. Sync, undo, regrade, re-pick — under three seconds for the round-trip on a 60s clip.",
    variant: "ink",
  },
];

export function LaunchFeatures() {
  return (
    <section className="relative bg-paper py-32 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="launch-eyebrow">Every tool, ready to go</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="launch-display mt-5 max-w-4xl text-balance text-[40px] sm:text-[52px] md:text-[72px] text-ink">
            Six things that make this feel like editing on rails — without losing the soul.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-muted md:text-lg">
            From a single tool to a complete workflow, at your own pace.
          </p>
        </Reveal>

        <RevealStagger
          className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.08}
        >
          {FEATURES.map((feature) => (
            <RevealItem key={feature.title}>
              <FeatureCard {...feature} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, body, variant }: Feature) {
  const styles = {
    ink: {
      bg: "bg-card-dark",
      title: "text-paper",
      body: "text-paper/65",
      iconBg: "bg-paper/8 text-paper",
    },
    paper: {
      bg: "bg-paper-deep",
      title: "text-ink",
      body: "text-ink-muted",
      iconBg: "bg-ink/8 text-ink",
    },
    wine: {
      bg: "bg-wine",
      title: "text-paper",
      body: "text-paper/70",
      iconBg: "bg-paper/10 text-paper",
    },
    magenta: {
      bg: "bg-magenta",
      title: "text-white",
      body: "text-white/85",
      iconBg: "bg-white/15 text-white",
    },
  }[variant];

  return (
    <article
      className={`group h-full rounded-[28px] p-9 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${styles.bg}`}
    >
      <span
        className={`grid size-12 place-items-center rounded-2xl ${styles.iconBg}`}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className={`launch-display mt-7 text-[26px] md:text-[30px] ${styles.title}`}>
        {title}
      </h3>
      <p className={`mt-4 text-[15px] leading-relaxed ${styles.body}`}>
        {body}
      </p>
    </article>
  );
}
