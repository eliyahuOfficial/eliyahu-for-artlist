"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { LangSwitch } from "./LangSwitch";

export function Navbar() {
  const { locale } = useLocale();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 14]);
  const bg = useTransform(scrollY, [0, 80], ["rgba(7,6,11,0)", "rgba(7,6,11,0.6)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"],
  );

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (b) => `blur(${b}px)`), background: bg, borderColor: border }}
      className="sticky top-0 z-50 w-full border-b"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-[10px] font-bold text-black">
            E
          </span>
          <span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white">
            Eliyahu <span className="text-white/50">— for Artlist</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <a className="text-sm text-white/70 hover:text-white" href="#work">
            {pick(copy.nav.work, locale)}
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#launch">
            {pick(copy.nav.launch, locale)}
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#about">
            {locale === "he" ? "עליי" : "About"}
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#why">
            {pick(copy.nav.why, locale)}
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#contact">
            {pick(copy.nav.contact, locale)}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="#contact"
            className="hidden h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-black transition-colors hover:bg-white/90 md:inline-flex"
          >
            {pick(copy.nav.cta, locale)}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
