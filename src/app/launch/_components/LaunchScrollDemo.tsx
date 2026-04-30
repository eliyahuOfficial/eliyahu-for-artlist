"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

const STEPS = [
  {
    label: "01 · Drop",
    title: "Drop a clip and a track.",
    body: "Any timeline export. Any artist. Sync ingests both in seconds and reads the metadata your editor already wrote.",
  },
  {
    label: "02 · Detect",
    title: "We find every downbeat.",
    body: "Beat detection runs on the audio's transient envelope. BPM, time signature, key — all surfaced before you click anything.",
  },
  {
    label: "03 · Lock",
    title: "Each cut snaps to the closest transient.",
    body: "Your cuts pull within a frame of the nearest beat — or stay loose if you mark them sacred. Two modes, one slider.",
  },
  {
    label: "04 · Tug",
    title: "Then drag the feel back to taste.",
    body: "Slide the swing. Push the offset. Cuts behave like notes on a grid you can bend.",
  },
];

export function LaunchScrollDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useIso(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const visual = visualRef.current;
      if (!section || !track || !visual) return;

      // Pin the section while the inner track scrolls horizontally.
      const distance = track.scrollWidth - track.clientWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.2}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step-keyed gradient hue rotation on the visual.
      gsap.to(visual, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.2}`,
          scrub: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how"
      ref={sectionRef}
      className="relative h-[100svh] overflow-hidden bg-black/40"
      aria-label="How Artlist Sync works"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div
          ref={visualRef}
          className="absolute left-1/2 top-1/2 size-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,95,158,0.15), rgba(182,92,255,0.15), rgba(92,246,255,0.15), rgba(255,139,61,0.15), rgba(255,95,158,0.15))",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between px-5 pt-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
              How it works
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Four moves between a raw clip and a track that owns the cut.
            </h2>
          </div>
          <p className="hidden items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-white/40 md:flex">
            ← Scroll to advance →
          </p>
        </div>

        <div className="relative mt-10 flex flex-1 items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-[55vh] gap-6 px-8 will-change-transform"
            style={{ width: "max-content" }}
          >
            {STEPS.map((s, i) => (
              <Step key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <article className="flex h-full w-[78vw] flex-col justify-end rounded-3xl border border-white/[0.07] bg-white/[0.03] p-10 backdrop-blur-md md:w-[58vw] lg:w-[44vw]">
      <span className="text-[11px] uppercase tracking-[0.3em] text-fuchsia-300">{label}</span>
      <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
        {body}
      </p>
    </article>
  );
}
