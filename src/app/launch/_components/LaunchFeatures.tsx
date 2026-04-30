"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Crosshair, Gauge, Layers, Magnet, Waves, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Magnet,
    title: "Stem-aware locking",
    body: "Sync to the kick, the lead, or the vocal — choose which stem owns your edit and only cut against its transients.",
  },
  {
    icon: Crosshair,
    title: "Frame-precise snap",
    body: "Snaps each cut within a single frame of the nearest beat, with a tolerance dial when you want it loose.",
  },
  {
    icon: Waves,
    title: "Swing & feel",
    body: "Bend the grid like a notation engraver. Push the swing, drag the offset — your cuts move with the music.",
  },
  {
    icon: Layers,
    title: "Multitrack reasoning",
    body: "Multiple audio layers, multiple visual angles. Sync resolves them as one timeline, not a stack of unrelated clips.",
  },
  {
    icon: Workflow,
    title: "Plays nice with the rest of Artlist",
    body: "Surfaces tracks from your existing library. Imports stems straight from any subscription. Exports XML to FCP, Premiere, DaVinci.",
  },
  {
    icon: Gauge,
    title: "Built for fast hands",
    body: "Keyboard-driven everything. Sync, undo, regrade, re-pick — under three seconds for the round-trip on a 60s clip.",
  },
];

export function LaunchFeatures() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
          What's inside
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Six things that make this feel like editing on rails — without losing the soul.
        </h2>
      </Reveal>

      <RevealStagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <RevealItem key={title}>
            <article className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-colors hover:bg-white/[0.04]">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 text-fuchsia-200">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
