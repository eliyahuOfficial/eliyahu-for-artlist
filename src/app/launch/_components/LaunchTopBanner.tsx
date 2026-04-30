"use client";

import { motion } from "framer-motion";

export function LaunchTopBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 border-b border-fuchsia-400/15 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-orange-400/15 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 px-5 py-2.5 text-center text-xs text-white/80">
        <span className="size-1.5 animate-pulse rounded-full bg-fuchsia-400" />
        <span>
          This is a 48-hour build by{" "}
          <span className="font-semibold text-white">Eliyahu Levi</span> as part of an
          application to Artlist. Pricing data is served via Next.js ISR.
        </span>
      </div>
    </motion.div>
  );
}
