"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function LaunchCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="early-access"
      className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-600/15 to-orange-500/20 p-10 md:p-16">
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">
            Early access
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Cut to the music. Stop chasing it.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@studio.io"
              aria-label="Work email"
              className="h-12 flex-1 rounded-full border border-white/10 bg-black/40 px-5 text-sm text-white placeholder:text-white/35 focus:border-fuchsia-400 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-white/90"
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

        <Reveal delay={0.18}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: submitted ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-xs text-white/55"
          >
            {submitted
              ? "Thanks. In a real build this would call /api/early-access and write to a CRM."
              : "We'll email you when your studio's slot opens. No spam, no drip — just one note when it's ready."}
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
