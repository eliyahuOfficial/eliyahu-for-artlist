"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function LaunchCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="early-access"
      className="relative isolate overflow-hidden text-paper"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/launch-cta-fashion.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-wine-deep/85 via-wine-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-wine-deep/55 via-transparent to-wine-deep/20" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-32 md:py-48">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-paper/65">
            Early access
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="launch-display mt-6 max-w-4xl text-balance text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px]">
            Be Sync.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/75 md:text-lg">
            Cut to the music. Stop chasing it. We&apos;ll email you when your studio&apos;s slot opens — no spam, no drip, just one note when it&apos;s ready.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@studio.io"
              aria-label="Work email"
              className="h-13 flex-1 rounded-full border border-paper/20 bg-paper/8 px-6 py-4 text-sm text-paper placeholder:text-paper/40 backdrop-blur-sm focus:border-magenta focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="launch-cta-pink inline-flex h-13 items-center justify-center gap-2 px-7 py-4 text-sm font-semibold"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="size-4" aria-hidden />
                  You&apos;re on the list
                </>
              ) : (
                <>
                  Request access
                  <ArrowRight className="size-4" aria-hidden />
                </>
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.24}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: submitted ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-xs text-paper/55"
          >
            {submitted
              ? "Thanks. In a real build this would call /api/early-access and write to a CRM."
              : "Trusted by 1M+ creative pros — coca-cola · ogilvy · r/ga · wonder · guess. (None of them, actually. This is a mock.)"}
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}

