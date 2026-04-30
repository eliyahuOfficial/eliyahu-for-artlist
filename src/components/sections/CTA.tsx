"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, Check, Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);
  const wa = `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`;

  const handleEmailClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(site.email).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        },
        () => {},
      );
    }
    // mailto: continues to fire via href
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden text-paper"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/cta-home-fashion.jpg"
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
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-paper/65">
            {pick(copy.cta.eyebrow, locale)}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="launch-display mt-7 max-w-4xl text-balance text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px] text-paper">
            {pick(copy.cta.title, locale)}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/75 md:text-lg">
            {pick(copy.cta.subtitle, locale)}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            {site.calendly ? (
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className="launch-cta-pink inline-flex h-13 items-center gap-2 px-7 py-4 text-sm font-semibold"
              >
                <Calendar className="size-4" aria-hidden />
                {pick(copy.cta.btn_meet, locale)}
              </a>
            ) : null}
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-semibold text-ink transition hover:bg-paper-warm"
            >
              <MessageCircle className="size-4" aria-hidden />
              {pick(copy.cta.btn_whatsapp, locale)}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={handleEmailClick}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-paper/25 bg-paper/8 px-7 py-4 text-sm font-medium text-paper transition hover:bg-paper/15"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-magenta" aria-hidden />
                  {locale === "he" ? "הועתק ללוח" : "Copied to clipboard"}
                </>
              ) : (
                <>
                  <Mail className="size-4" aria-hidden />
                  {pick(copy.cta.btn_email, locale)}
                </>
              )}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-8 text-[14px] text-paper/65">
            {locale === "he" ? "או ישירות:" : "Or reach me directly:"}{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-paper underline decoration-magenta decoration-2 underline-offset-4 transition hover:text-magenta"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

