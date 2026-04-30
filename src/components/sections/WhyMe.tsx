"use client";

import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const VARIANTS = ["ink", "paper-deep", "wine", "magenta"] as const;
type Variant = (typeof VARIANTS)[number];

export function WhyMe() {
  const { locale } = useLocale();

  return (
    <section id="why" className="relative bg-paper py-32 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="launch-eyebrow">{pick(copy.why.eyebrow, locale)}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="launch-display mt-5 max-w-4xl text-balance text-[40px] sm:text-[52px] md:text-[72px] text-ink">
            {pick(copy.why.title, locale)}
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-5 md:grid-cols-2" staggerChildren={0.1}>
          {copy.why.points.map((p, i) => (
            <RevealItem key={i}>
              <PointCard
                index={i + 1}
                text={pick(p, locale)}
                variant={VARIANTS[i % VARIANTS.length]}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function PointCard({
  index,
  text,
  variant,
}: {
  index: number;
  text: string;
  variant: Variant;
}) {
  const styles = {
    ink: {
      bg: "bg-card-dark",
      text: "text-paper/85",
      number: "text-paper/8",
    },
    "paper-deep": {
      bg: "bg-paper-deep",
      text: "text-ink-soft",
      number: "text-ink/10",
    },
    wine: {
      bg: "bg-wine",
      text: "text-paper/85",
      number: "text-paper/10",
    },
    magenta: {
      bg: "bg-magenta",
      text: "text-white",
      number: "text-white/15",
    },
  }[variant];

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-[28px] p-10 transition-transform duration-500 hover:-translate-y-1 md:p-12",
        styles.bg,
      )}
    >
      <span
        className={cn(
          "launch-display absolute -right-2 -top-4 select-none text-[140px]",
          styles.number,
        )}
      >
        0{index}
      </span>
      <p className={cn("relative text-[16px] leading-relaxed md:text-lg", styles.text)}>
        {text}
      </p>
    </article>
  );
}
