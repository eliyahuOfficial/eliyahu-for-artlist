"use client";

import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export function WhyMe() {
  const { locale } = useLocale();

  return (
    <section id="why" className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
          {pick(copy.why.eyebrow, locale)}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {pick(copy.why.title, locale)}
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-5 md:grid-cols-2" staggerChildren={0.1}>
        {copy.why.points.map((p, i) => (
          <RevealItem key={i}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
              <span className="absolute -right-4 -top-4 select-none font-display text-7xl font-bold text-white/[0.04]">
                0{i + 1}
              </span>
              <p className="relative text-base leading-relaxed text-white/75">
                {pick(p, locale)}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
