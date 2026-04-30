"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function AboutMe() {
  const { locale } = useLocale();
  const c = copy.about;

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 md:py-32"
    >
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <Reveal className="relative">
          <div className="relative aspect-square w-44 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/40 via-violet-600/30 to-orange-500/40 p-1 sm:w-56 lg:w-72">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
              <Image
                src={site.photo}
                alt={`${site.fullName} portrait`}
                fill
                sizes="(max-width: 768px) 12rem, 18rem"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
              {pick(c.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              {pick(c.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              {pick(c.body, locale)}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <Stat
                label={pick(c.stat_years_label, locale)}
                value={pick(c.stat_years_value, locale)}
              />
              <Stat
                label={pick(c.stat_role_label, locale)}
                value={pick(c.stat_role_value, locale)}
              />
              <Stat
                label={pick(c.stat_ship_label, locale)}
                value={pick(c.stat_ship_value, locale)}
              />
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9">
              <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/55">
                {pick(c.releases, locale)}
              </p>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <iframe
                  title={`${site.artistAlias} on Spotify`}
                  src={site.spotifyEmbedA}
                  width="100%"
                  height="152"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-white/45">
                {pick(c.also_at, locale)}{" "}
                <a
                  href={site.spotifyArtistB}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 underline decoration-dotted underline-offset-2 hover:text-white"
                >
                  {pick(c.second_alias, locale)}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
      <dt className="text-[10.5px] uppercase tracking-[0.18em] text-white/45">{label}</dt>
      <dd className="mt-2 text-xl font-semibold tracking-tight text-white">{value}</dd>
    </div>
  );
}
