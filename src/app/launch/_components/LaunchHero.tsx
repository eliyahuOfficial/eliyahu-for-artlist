"use client";

import Image from "next/image";
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
      : "The creative platform to direct your best cut.";

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden text-paper"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/launch-hero-fashion.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-wine-deep/85 via-wine-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-wine-deep/55 via-transparent to-wine-deep/20" />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-paper/85 backdrop-blur-sm"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-magenta" />
            Ranked #1 marketing-tech demo · Read why
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="launch-display mt-7 text-balance text-[44px] sm:text-[58px] md:text-[76px] lg:text-[92px]"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 max-w-xl text-[17px] leading-relaxed text-paper/75 md:text-lg"
          >
            Drop a clip and a track. Sync detects the BPM, finds your downbeats, locks every
            cut to the closest transient — and lets you tug timing back to taste. Built for
            editors who think in beats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-11 flex flex-wrap gap-3"
          >
            <a
              href="#early-access"
              className="launch-cta-pink inline-flex h-13 items-center gap-2 px-7 py-4 text-sm font-semibold"
            >
              Start creating
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#how"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-paper/25 bg-paper/5 px-7 py-4 text-sm font-medium text-paper/90 transition hover:bg-paper/10"
            >
              Why Sync?
            </a>
          </motion.div>

          <p className="mt-7 text-[10.5px] uppercase tracking-[0.2em] text-paper/45">
            A/B variant served:{" "}
            <span className="font-semibold text-paper/75">{variant === "a" ? "A" : "B"}</span>
            {" · try "}
            <a className="underline decoration-dotted text-paper/70 hover:text-paper" href={`?v=${variant === "a" ? "b" : "a"}`}>
              the other one
            </a>
          </p>
        </div>

        {/* Right side — vertical capability list (Magnific-style) + timeline mock */}
        <div className="relative">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden flex-col gap-4 lg:flex"
          >
            {[
              "Beat-locked editing",
              "Auto BPM detection",
              "Frame-precise snap",
              "Multi-stem reasoning",
              "Plays nice with Artlist",
              "Built for fast hands",
            ].map((label, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="launch-display text-[28px] leading-tight text-paper/30 transition-colors hover:text-paper"
              >
                {label}
              </motion.li>
            ))}
          </motion.ul>

          {/* Compact timeline mock — sits below list on mobile, beside on desktop */}
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
            className="relative mt-10 aspect-[5/4] w-full max-w-md justify-self-center lg:mt-0 lg:absolute lg:-bottom-6 lg:right-0 lg:max-w-sm"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full overflow-hidden rounded-[28px] border border-paper/15 bg-card-dark p-1 shadow-[0_30px_120px_-20px_rgba(232,57,143,0.5)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-card-dark p-5">
                <header className="flex items-center justify-between text-[10px] text-paper/45">
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

                <div className="mt-5 flex items-center justify-between text-[10px] text-paper/45">
                  <span>BPM 124 · 4/4</span>
                  <span>Locked: 5/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
    <div className="rounded-lg border border-paper/8 bg-paper/3 p-2">
      <div className="flex items-center gap-2 text-[10px] text-paper/55">
        <span
          className={`grid size-5 place-items-center rounded ${
            accent ? "bg-magenta/30 text-magenta" : "bg-paper/8 text-paper/55"
          }`}
        >
          {icon}
        </span>
        {label}
      </div>
      <div className="relative mt-2 h-7 overflow-hidden rounded bg-black/60">
        <div
          className={`absolute inset-y-0 left-0 ${
            accent ? "bg-magenta/20" : "bg-paper/10"
          }`}
          style={{ width: "100%" }}
        />
        {cuts.map((c, i) => (
          <span
            key={i}
            className={`absolute top-0 h-full w-[2px] ${accent ? "bg-magenta" : "bg-paper/55"}`}
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
      className="pointer-events-none absolute left-0 top-[6.5rem] h-[7.5rem] w-[1px] bg-magenta shadow-[0_0_12px_2px_rgba(232,57,143,0.6)]"
    />
  );
}
