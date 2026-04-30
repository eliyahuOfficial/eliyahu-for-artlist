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

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Back to Eliyahu&apos;s application
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-fuchsia-200">
          <Sparkles className="size-3" aria-hidden />
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
