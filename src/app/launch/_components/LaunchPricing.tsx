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
    <section className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Pricing</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          One plan to try it. Two to ship with it.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-xs text-white/45">
          Pricing fetched via Next.js ISR · revalidates every 60 seconds · last refresh{" "}
          <span className="font-mono">{new Date(fetchedAt).toLocaleTimeString()}</span>
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <Reveal key={p.id} delay={0.06}>
            <article
              className={cn(
                "relative h-full rounded-3xl border p-7 transition-colors",
                p.badge
                  ? "border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-transparent"
                  : "border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04]",
              )}
            >
              {p.badge ? (
                <span className="absolute -top-3 left-7 rounded-full border border-fuchsia-400/40 bg-black px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-fuchsia-200">
                  {p.badge}
                </span>
              ) : null}
              <header>
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">
                    {p.price === 0 ? "Free" : `$${p.price}`}
                  </span>
                  {p.price > 0 ? (
                    <span className="text-sm text-white/55">/{p.cadence}</span>
                  ) : null}
                </p>
              </header>
              <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-fuchsia-300" aria-hidden />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#early-access"
                className={cn(
                  "mt-7 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  p.badge
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
                )}
              >
                {p.price === 0 ? "Start the trial" : "Pick this plan"}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
