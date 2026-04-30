"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

const STEPS = [
  {
    label: "01 · Drop",
    title: "Drop a clip and a track.",
    body: "Any timeline export. Any artist. Sync ingests both in seconds and reads the metadata your editor already wrote.",
    image: "/step-01-drop.jpg",
  },
  {
    label: "02 · Detect",
    title: "We find every downbeat.",
    body: "Beat detection runs on the audio's transient envelope. BPM, time signature, key — all surfaced before you click anything.",
    image: "/step-02-detect.jpg",
  },
  {
    label: "03 · Lock",
    title: "Each cut snaps to the closest transient.",
    body: "Your cuts pull within a frame of the nearest beat — or stay loose if you mark them sacred. Two modes, one slider.",
    image: "/step-03-lock.jpg",
  },
  {
    label: "04 · Tug",
    title: "Then drag the feel back to taste.",
    body: "Slide the swing. Push the offset. Cuts behave like notes on a grid you can bend.",
    image: "/step-04-tug.jpg",
  },
];

export function LaunchScrollDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIso(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Track is `width: max-content` so scrollWidth === clientWidth.
      // Compare to the visible viewport instead.
      const distance = track.scrollWidth - window.innerWidth;
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
      className="relative h-svh overflow-hidden bg-paper-warm"
      aria-label="How Artlist Sync works"
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pt-16">
          <div>
            <p className="launch-eyebrow">How it works</p>
            <h2 className="launch-display mt-4 max-w-3xl text-balance text-[36px] sm:text-[44px] md:text-[60px] text-ink">
              Four moves between a raw clip and a track that owns the cut.
            </h2>
          </div>
          <p className="hidden items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-ink-muted md:flex">
            ← Scroll to advance →
          </p>
        </div>

        <div className="relative mt-10 flex flex-1 items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-[58vh] gap-6 px-8 will-change-transform"
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

function Step({
  label,
  title,
  body,
  image,
}: {
  label: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <article className="relative flex h-full w-[78vw] flex-col justify-end overflow-hidden rounded-3xl p-10 md:w-[58vw] lg:w-[44vw]">
      {/* Background image */}
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 78vw, (max-width: 1024px) 58vw, 44vw"
        className="-z-20 object-cover"
      />
      {/* Wine overlay — strong at bottom for text legibility */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-wine-deep/95 via-wine-deep/45 to-wine-deep/15" />

      <span className="relative text-[11px] uppercase tracking-[0.3em] text-magenta">
        {label}
      </span>
      <h3 className="launch-display relative mt-5 text-balance text-[32px] md:text-[44px] text-paper">
        {title}
      </h3>
      <p className="relative mt-5 max-w-md text-[16px] leading-relaxed text-paper/85 md:text-lg">
        {body}
      </p>
    </article>
  );
}
