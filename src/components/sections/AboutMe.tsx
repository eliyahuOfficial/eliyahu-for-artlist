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
    <>
      {/* Full-bleed band — hands on console, music identity */}
      <div className="relative aspect-21/9 w-full overflow-hidden md:aspect-32/9">
        <Image
          src="/section-break-music.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-paper-warm/0 via-transparent to-paper-warm" />
      </div>

    <section id="about" className="relative bg-paper-warm py-32 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[auto_1fr] lg:items-start">
          <Reveal className="relative">
            <div className="relative aspect-square w-52 overflow-hidden rounded-[28px] bg-card-dark p-1 sm:w-64 lg:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-card-dark">
                <Image
                  src={site.photo}
                  alt={`${site.fullName} portrait`}
                  fill
                  sizes="(max-width: 768px) 13rem, 20rem"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="launch-eyebrow">{pick(c.eyebrow, locale)}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="launch-display mt-5 max-w-3xl text-balance text-[36px] sm:text-[48px] md:text-[64px] text-ink">
                {pick(c.title, locale)}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-muted md:text-lg">
                {pick(c.body, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
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
              <div className="mt-12">
                <p className="launch-eyebrow mb-4">{pick(c.releases, locale)}</p>
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-card-dark">
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
                <p className="mt-4 text-[13px] text-ink-muted">
                  {pick(c.also_at, locale)}{" "}
                  <a
                    href={site.spotifyArtistB}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-magenta decoration-2 underline-offset-4 hover:text-magenta"
                  >
                    {pick(c.second_alias, locale)}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-paper p-6">
      <dt className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </dt>
      <dd className="launch-display mt-3 text-[22px] text-ink">{value}</dd>
    </div>
  );
}
