"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Plan = {
  id: string;
  name: string;
  price: number;
  cadence: "month" | "year";
  perks: string[];
  badge?: string;
};

export function LaunchPricing({
  plans,
  fetchedAt,
}: {
  plans: Plan[];
  fetchedAt: string;
}) {
  return (
    <section className="relative bg-paper-warm py-32 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="launch-eyebrow">Pricing</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="launch-display mt-5 max-w-4xl text-balance text-[40px] sm:text-[52px] md:text-[72px] text-ink">
            Plans built for creative work at scale.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-[14px] text-ink-muted">
            Pricing fetched via Next.js ISR · revalidates every 60 seconds · last refresh{" "}
            <span className="font-mono text-ink">{new Date(fetchedAt).toLocaleTimeString()}</span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Reveal key={p.id} delay={0.06}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.badge);
  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-[28px] p-10 transition-transform duration-500 hover:-translate-y-1",
        featured ? "bg-card-dark text-paper" : "bg-paper text-ink",
      )}
    >
      {featured ? (
        <span className="absolute right-7 top-7 inline-flex items-center gap-1.5 rounded-full bg-magenta px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
          {plan.badge}
        </span>
      ) : null}

      <header>
        <h3 className={cn("launch-display text-[28px]", featured ? "text-paper" : "text-ink")}>
          {plan.name}
        </h3>
        <p className="mt-5 flex items-baseline gap-1.5">
          <span
            className={cn(
              "launch-display text-[56px]",
              featured ? "text-paper" : "text-ink",
            )}
          >
            {plan.price === 0 ? "Free" : `$${plan.price}`}
          </span>
          {plan.price > 0 ? (
            <span
              className={cn(
                "text-sm",
                featured ? "text-paper/55" : "text-ink-muted",
              )}
            >
              /{plan.cadence}
            </span>
          ) : null}
        </p>
      </header>

      <ul
        className={cn(
          "mt-8 space-y-3 text-[15px]",
          featured ? "text-paper/85" : "text-ink-soft",
        )}
      >
        {plan.perks.map((perk) => (
          <li key={perk} className="flex gap-3">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                featured ? "text-magenta" : "text-magenta",
              )}
              aria-hidden
            />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <a
        href="#early-access"
        className={cn(
          "mt-9 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition",
          featured
            ? "bg-magenta text-white hover:bg-magenta-bright"
            : "bg-ink text-paper hover:bg-ink-soft",
        )}
      >
        {plan.price === 0 ? "Start the trial" : "Pick this plan"}
      </a>
    </article>
  );
}
