"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Music, Video } from "lucide-react";

export function LaunchHero() {
  const params = useSearchParams();
  const variant: "a" | "b" = params.get("v") === "b" ? "b" : "a";

  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });
  const rx = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const ry = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const headline =
    variant === "b"
      ? "Stop cutting to the music. Make the music cut to you."
      : "Auto-sync any track to any cut. In one click.";

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden"
    >
      <Backdrop />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            Artlist Sync™ · Now in beta
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            {headline.split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-pre"
              >
                {i === 4 || i === 5 ? <span className="gradient-text">{w} </span> : `${w} `}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 max-w-xl text-base text-white/65 md:text-lg"
          >
            Drop a clip and a track. Sync detects the BPM, finds your downbeats, locks every
            cut to the closest transient — and lets you tug timing back to taste. Built for
            editors who think in beats.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#early-access"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90"
            >
              Join early access
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              See how it works
            </a>
          </motion.div>
          <p className="mt-6 text-[10.5px] uppercase tracking-[0.2em] text-white/40">
            A/B variant served:{" "}
            <span className="font-semibold text-white/70">{variant === "a" ? "A" : "B"}</span>
            {" · try "}
            <a className="underline decoration-dotted" href={`?v=${variant === "a" ? "b" : "a"}`}>
              the other one
            </a>
          </p>
        </div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
          className="relative aspect-[5/4] w-full max-w-md justify-self-center"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-fuchsia-500/30 via-violet-600/20 to-orange-500/30 p-1 shadow-[0_30px_120px_-20px_rgba(255,95,158,0.5)]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black/95 p-5">
              <header className="flex items-center justify-between text-[10px] text-white/45">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-rose-500" />
                  <span className="size-2 rounded-full bg-amber-400" />
                  <span className="size-2 rounded-full bg-emerald-500" />
                </span>
                <span>sync.artlist.io · timeline</span>
              </header>

              <div className="mt-5 grid grid-rows-[auto_auto_auto] gap-3">
                <Track icon={<Video className="size-3" />} label="V1 · Hero cut" cuts={[8, 22, 41, 56, 78]} />
                <Track icon={<Music className="size-3" />} label="A1 · Lead synth" cuts={[8, 22, 41, 56, 78]} accent />
                <Track icon={<Music className="size-3" />} label="A2 · Sub kick" cuts={[12, 28, 44, 60, 80]} />
              </div>

              <Playhead />

              <div className="mt-5 flex items-center justify-between text-[10px] text-white/45">
                <span>BPM 124 · 4/4</span>
                <span>Locked: 5/5</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Track({
  icon,
  label,
  cuts,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  cuts: number[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
      <div className="flex items-center gap-2 text-[10px] text-white/55">
        <span
          className={`grid size-5 place-items-center rounded ${
            accent ? "bg-fuchsia-500/30 text-fuchsia-200" : "bg-white/5 text-white/55"
          }`}
        >
          {icon}
        </span>
        {label}
      </div>
      <div className="relative mt-2 h-7 overflow-hidden rounded bg-black/60">
        <div
          className={`absolute inset-y-0 left-0 ${
            accent ? "bg-fuchsia-500/20" : "bg-white/10"
          }`}
          style={{ width: "100%" }}
        />
        {cuts.map((c, i) => (
          <span
            key={i}
            className={`absolute top-0 h-full w-[2px] ${accent ? "bg-fuchsia-300" : "bg-white/55"}`}
            style={{ left: `${c}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function Playhead() {
  return (
    <motion.span
      aria-hidden
      initial={{ left: "0%" }}
      animate={{ left: ["0%", "82%", "0%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute left-0 top-[6.5rem] h-[7.5rem] w-[1px] bg-cyan-300/70 shadow-[0_0_12px_2px_rgba(92,246,255,0.5)]"
    />
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <motion.div
        className="absolute -left-32 -top-32 size-[40rem] rounded-full bg-fuchsia-600/30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 size-[44rem] rounded-full bg-violet-600/30 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
