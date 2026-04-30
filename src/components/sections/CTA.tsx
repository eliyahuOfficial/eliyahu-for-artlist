"use client";

import { Calendar, Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  const { locale } = useLocale();
  const wa = `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40"
    >
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-600/15 to-orange-500/20 p-10 md:p-16">
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">
            {pick(copy.cta.eyebrow, locale)}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {pick(copy.cta.title, locale)}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
            {pick(copy.cta.subtitle, locale)}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            {site.calendly ? (
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-white/90"
              >
                <Calendar className="size-4" aria-hidden />
                {pick(copy.cta.btn_meet, locale)}
              </a>
            ) : null}
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-4" aria-hidden />
              {pick(copy.cta.btn_whatsapp, locale)}
            </a>
            <a
              href={`mailto:${site.email}?subject=Front-end%20position%20%E2%80%94%20Eliyahu`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/85 transition-colors hover:bg-white/15"
            >
              <Mail className="size-4" aria-hidden />
              {pick(copy.cta.btn_email, locale)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
