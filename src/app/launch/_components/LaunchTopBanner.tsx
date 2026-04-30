"use client";

import { motion } from "framer-motion";

export function LaunchTopBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 border-b border-ink/10 bg-paper-warm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 px-5 py-2.5 text-center text-[12px] text-ink-soft">
        <span className="size-1.5 animate-pulse rounded-full bg-magenta" />
        <span>
          A 48-hour build by{" "}
          <span className="font-semibold text-ink">Eliyahu Levi</span> —
          part of an application to Artlist. Pricing is served via Next.js ISR.
        </span>
      </div>
    </motion.div>
  );
}
