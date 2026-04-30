"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { projects, pickL } from "@/content/projects";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function WhatIBuilt() {
  const { locale } = useLocale();

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative bg-paper pt-32 pb-20 md:pt-44 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="launch-eyebrow">{pick(copy.built.eyebrow, locale)}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="launch-display mt-5 max-w-4xl text-balance text-[40px] sm:text-[52px] md:text-[80px] text-ink">
            {pick(copy.built.title, locale)}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-muted md:text-lg">
            {pick(copy.built.subtitle, locale)}
          </p>
        </Reveal>

        {/* Featured project — FELORA gets the dark spotlight card */}
        {featured ? (
          <Reveal delay={0.12}>
            <FeaturedCard
              accent={featured.accent}
              name={featured.name}
              badge={pick(copy.built.felora_badge, locale)}
              tagline={pickL(featured.tagline, locale)}
              description={pickL(featured.description, locale)}
              pullQuote={pick(copy.built.felora_pull, locale)}
              stack={featured.stack}
              href={featured.href}
              image={featured.image}
              stats={featured.stats.map((s) => ({
                label: pickL(s.label, locale),
                value: s.value,
              }))}
            />
          </Reveal>
        ) : null}

        {/* The other projects — alternating cream/wine cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 + i * 0.08}>
              <ProjectCard
                accent={p.accent}
                name={p.name}
                tagline={pickL(p.tagline, locale)}
                description={pickL(p.description, locale)}
                stack={p.stack}
                href={p.href}
                image={p.image}
                variant={i === 0 ? "wine" : "paper-deep"}
                stats={p.stats.map((s) => ({
                  label: pickL(s.label, locale),
                  value: s.value,
                }))}
              />
            </Reveal>
          ))}
        </div>

        {/* Client work strip — paid Elementor / WordPress builds */}
        <Reveal delay={0.2}>
          <a
            href="https://shirafeder.co.il"
            target="_blank"
            rel="noreferrer"
            className="group mt-12 flex flex-col gap-6 overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm p-6 transition-colors hover:bg-paper-deep md:flex-row md:items-center md:p-8"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-32 md:w-56 md:flex-shrink-0">
              <Image
                src="/shirafeder.jpg"
                alt="shirafeder.co.il preview"
                fill
                sizes="(max-width: 768px) 100vw, 224px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="md:flex-1">
              <p className="launch-eyebrow">
                {pick(copy.built.client_eyebrow, locale)}
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                {pick(copy.built.client_body, locale)}
              </p>
            </div>
            <span className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-ink px-5 text-xs font-semibold text-paper transition-colors group-hover:bg-ink-soft md:self-auto">
              shirafeder.co.il
              <ArrowUpRight
                className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-16 flex flex-col gap-6 border-t border-ink/8 pt-12 md:flex-row md:items-end md:gap-10">
            <div className="md:flex-shrink-0">
              <span className="launch-display block text-[88px] leading-none text-magenta md:text-[128px]">
                {pick(copy.built.client_volume_number, locale)}
              </span>
            </div>
            <div className="md:pb-3">
              <p className="launch-display text-[28px] leading-tight text-ink md:text-[40px]">
                {pick(copy.built.client_volume_main, locale)}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted md:text-base">
                {pick(copy.built.client_volume_sub, locale)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedCard({
  name,
  badge,
  tagline,
  description,
  pullQuote,
  stack,
  stats,
  href,
  image,
}: {
  accent: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  pullQuote: string;
  stack: string[];
  stats: { label: string; value: string }[];
  href?: string;
  image?: string;
}) {
  const Wrapper = href ? motion.a : motion.article;
  const wrapperProps = href
    ? { href, target: "_blank" as const, rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="group relative mt-14 block overflow-hidden rounded-[36px] bg-card-dark text-paper"
    >
      {image ? (
        <div className="relative aspect-21/9 w-full overflow-hidden border-b border-paper/10">
          <Image
            src={image}
            alt={`${name} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card-dark via-card-dark/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card-dark/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-paper/85 backdrop-blur-md">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live · {href?.replace(/^https?:\/\//, "")}
            </span>
            <ArrowUpRight className="size-7 text-paper/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper" />
          </div>
        </div>
      ) : null}
      <div className="grid gap-12 p-10 md:p-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-magenta px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              {name}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 bg-paper/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-paper/85">
              <Sparkles className="size-3 text-magenta" aria-hidden />
              {badge}
            </div>
          </div>

          <h3 className="launch-display mt-7 text-balance text-[34px] md:text-[48px] text-paper">
            {tagline}
          </h3>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-paper/70 md:text-lg">
            {description}
          </p>

          <blockquote className="relative mt-7 max-w-xl rounded-2xl border border-magenta/30 bg-magenta/8 p-6 text-[15px] leading-relaxed text-paper/85">
            {pullQuote}
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-paper/12 bg-paper/4 px-3 py-1.5 text-[11px] font-medium text-paper/75"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 content-start gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-paper/8 bg-paper/4 p-5"
            >
              <dt className="text-[10px] uppercase tracking-[0.18em] text-paper/45">
                {s.label}
              </dt>
              <dd className="launch-display mt-2 text-[24px] text-paper">
                {s.value}
              </dd>
            </div>
          ))}
          <div className="col-span-2 rounded-2xl bg-magenta p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/85">
                {href ? `Visit · ${href.replace(/^https?:\/\//, "")}` : "Live in production"}
              </p>
              <ArrowUpRight className="size-5 text-white/85 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </div>
        </dl>
      </div>
    </Wrapper>
  );
}

function ProjectCard({
  name,
  tagline,
  description,
  stack,
  stats,
  href,
  image,
  variant,
}: {
  accent: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  stats: { label: string; value: string }[];
  href?: string;
  image?: string;
  variant: "wine" | "paper-deep";
}) {
  const Wrapper = href ? motion.a : motion.article;
  const wrapperProps = href
    ? { href, target: "_blank" as const, rel: "noreferrer" }
    : {};
  const styles =
    variant === "wine"
      ? {
          bg: "bg-wine",
          title: "text-paper",
          body: "text-paper/70",
          chip: "bg-paper/8 text-paper/85 border-paper/15",
          name: "bg-magenta text-white",
          stat: "border-paper/10 bg-paper/4",
          statLabel: "text-paper/55",
          statValue: "text-paper",
          arrow: "text-paper/45 group-hover:text-paper",
        }
      : {
          bg: "bg-paper-deep",
          title: "text-ink",
          body: "text-ink-muted",
          chip: "bg-ink/5 text-ink-soft border-ink/10",
          name: "bg-ink text-paper",
          stat: "border-ink/10 bg-paper-warm",
          statLabel: "text-ink-muted",
          statValue: "text-ink",
          arrow: "text-ink/40 group-hover:text-ink",
        };

  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={cn(
        "group relative block h-full overflow-hidden rounded-[28px]",
        styles.bg,
      )}
    >
      {image ? (
        <div className={cn("relative aspect-16/9 w-full overflow-hidden border-b", variant === "wine" ? "border-paper/10" : "border-ink/10")}>
          <Image
            src={image}
            alt={`${name} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              variant === "wine"
                ? "bg-linear-to-t from-wine via-wine/30 to-transparent"
                : "bg-linear-to-t from-paper-deep/70 via-paper-deep/10 to-transparent",
            )}
          />
        </div>
      ) : null}
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between">
          <div className={cn("rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]", styles.name)}>
            {name}
          </div>
          <ArrowUpRight className={cn("size-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1", styles.arrow)} />
        </div>

        <h3 className={cn("launch-display mt-6 text-[26px] md:text-[32px]", styles.title)}>
          {tagline}
        </h3>
        <p className={cn("mt-4 text-[15px] leading-relaxed", styles.body)}>{description}</p>

        <dl className="mt-7 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={cn("rounded-xl border p-3.5", styles.stat)}
            >
              <dt className={cn("text-[10px] uppercase tracking-wider", styles.statLabel)}>
                {s.label}
              </dt>
              <dd className={cn("launch-display mt-1.5 text-[18px]", styles.statValue)}>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span
              key={s}
              className={cn("rounded-full border px-2.5 py-1 text-[10.5px] font-medium", styles.chip)}
            >
              {s}
            </span>
          ))}
        </div>
        {href ? (
          <p className={cn("mt-5 text-[11px] uppercase tracking-[0.18em]", styles.statLabel)}>
            Visit · {href.replace(/^https?:\/\//, "")}
          </p>
        ) : null}
      </div>
    </Wrapper>
  );
}
