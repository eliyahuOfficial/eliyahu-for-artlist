"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";
import { LangSwitch } from "./LangSwitch";

export function Navbar() {
  const { locale } = useLocale();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const wa = `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`;

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  // When over the wine-gradient hero (top of page), use light text.
  // Once scrolled past, switch to dark text on cream backdrop.
  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(240, 229, 210, 0.85)" : "rgba(240, 229, 210, 0)",
        borderColor: scrolled ? "rgba(26, 14, 14, 0.08)" : "rgba(26, 14, 14, 0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-magenta text-[11px] font-bold text-white">
            E
          </span>
          <span
            className={`text-sm font-medium tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            Eliyahu{" "}
            <span className={scrolled ? "text-ink-muted" : "text-paper/55"}>
              — for Artlist
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink href="#work" scrolled={scrolled}>
            {pick(copy.nav.work, locale)}
          </NavLink>
          <NavLink href="#launch" scrolled={scrolled}>
            {pick(copy.nav.launch, locale)}
          </NavLink>
          <NavLink href="#about" scrolled={scrolled}>
            {locale === "he" ? "עליי" : "About"}
          </NavLink>
          <NavLink href="#why" scrolled={scrolled}>
            {pick(copy.nav.why, locale)}
          </NavLink>
          <NavLink href="#contact" scrolled={scrolled}>
            {pick(copy.nav.contact, locale)}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center justify-center rounded-full bg-magenta px-5 text-xs font-semibold text-white transition-colors hover:bg-magenta-bright md:inline-flex"
          >
            {pick(copy.nav.cta, locale)}
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  scrolled,
  children,
}: {
  href: string;
  scrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors ${
        scrolled ? "text-ink-muted hover:text-ink" : "text-paper/75 hover:text-paper"
      }`}
    >
      {children}
    </a>
  );
}
