import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { LaunchHero } from "./_components/LaunchHero";
import { LaunchScrollDemo } from "./_components/LaunchScrollDemo";
import { LaunchFeatures } from "./_components/LaunchFeatures";
import { LaunchPricing } from "./_components/LaunchPricing";
import { LaunchCTA } from "./_components/LaunchCTA";
import { LaunchTopBanner } from "./_components/LaunchTopBanner";
import { SYNC_PRICING } from "@/data/pricing";

// Static generation with ISR — pricing revalidates every 60 seconds.
export const revalidate = 60;

export default function LaunchPage() {
  // Stamp the build/revalidate moment so we can prove ISR is alive in the UI.
  const fetchedAt = new Date().toISOString();

  return (
    <>
      <LaunchTopBanner />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-deep/40 px-4 py-2 text-xs font-medium text-ink-soft transition-colors hover:bg-paper-deep/70"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to Eliyahu&apos;s application
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper">
          <Sparkles className="size-3 text-magenta" aria-hidden />
          Demo · Not a real product
        </span>
      </header>

      <Suspense fallback={<div className="min-h-[88svh]" />}>
        <LaunchHero />
      </Suspense>
      <LaunchScrollDemo />
      <LaunchFeatures />
      <LaunchPricing plans={SYNC_PRICING} fetchedAt={fetchedAt} />
      <LaunchCTA />
    </>
  );
}
