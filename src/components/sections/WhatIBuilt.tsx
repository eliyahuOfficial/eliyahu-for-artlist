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
    <section id="work" className="relative mx-auto w-full max-w-6xl px-5 py-28 md:py-40">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
          {pick(copy.built.eyebrow, locale)}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {pick(copy.built.title, locale)}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">
          {pick(copy.built.subtitle, locale)}
        </p>
      </Reveal>

      {/* Featured project — FELORA gets the spotlight */}
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

      {/* The other projects */}
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
          className="group mt-12 flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] md:flex-row md:items-center md:gap-6 md:p-6"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 md:h-28 md:w-48 md:flex-shrink-0">
            <Image
              src="/shirafeder.jpg"
              alt="shirafeder.co.il preview"
              fill
              sizes="(max-width: 768px) 100vw, 192px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          </div>
          <div className="md:flex-1">
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-white/55">
              {pick(copy.built.client_eyebrow, locale)}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              {pick(copy.built.client_body, locale)}
            </p>
          </div>
          <span className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/85 transition-colors group-hover:bg-white/10 md:self-auto">
            shirafeder.co.il
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </a>
      </Reveal>
    </section>
  );
}

function FeaturedCard({
  accent,
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
      className="group relative mt-12 block overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-1 backdrop-blur-md"
    >
      {/* Outer gradient ring */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px -z-10 rounded-[32px] opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80",
          "bg-gradient-to-br",
          accent,
        )}
      />
      <div className="relative rounded-[28px] bg-black/55">
        {image ? (
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-t-[28px] border-b border-white/10">
            <Image
              src={image}
              alt={`${name} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live · {href?.replace(/^https?:\/\//, "")}
              </span>
              <ArrowUpRight className="size-6 text-white/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </div>
        ) : null}
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={cn(
                "h-7 rounded-full bg-gradient-to-r px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black",
                accent,
                "flex items-center",
              )}
            >
              {name}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-fuchsia-200">
              <Sparkles className="size-3" aria-hidden />
              {badge}
            </div>
          </div>

          <h3 className="mt-6 text-balance text-3xl font-semibold leading-[1.08] tracking-tight md:text-4xl">
            {tagline}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>

          <blockquote className="relative mt-6 max-w-xl rounded-2xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-transparent p-5 text-sm leading-relaxed text-white/80">
            {pullQuote}
          </blockquote>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10.5px] font-medium text-white/70"
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
              className="rounded-2xl border border-white/[0.07] bg-black/50 p-4"
            >
              <dt className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                {s.label}
              </dt>
              <dd className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                {s.value}
              </dd>
            </div>
          ))}
          <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                {href ? `Visit · ${href.replace(/^https?:\/\//, "")}` : "Live in production"}
              </p>
              <ArrowUpRight className="size-5 text-white/40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </div>
        </dl>
        </div>
      </div>
    </Wrapper>
  );
}

function ProjectCard({
  accent,
  name,
  tagline,
  description,
  stack,
  stats,
  href,
  image,
}: {
  accent: string;
  name: string;
  tagline: string;
  description: string;
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
      className="group relative block h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-md"
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40",
          "bg-gradient-to-br",
          accent,
        )}
      />
      {image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10">
          <Image
            src={image}
            alt={`${name} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      ) : null}
      <div className="p-7">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "h-7 rounded-full bg-gradient-to-r px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black",
            accent,
            "flex items-center",
          )}
        >
          {name}
        </div>
        <ArrowUpRight className="size-5 text-white/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
      </div>

      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
        {tagline}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>

      <dl className="mt-6 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/5 bg-black/30 p-3"
          >
            <dt className="text-[10px] uppercase tracking-wider text-white/45">
              {s.label}
            </dt>
            <dd className="mt-1 text-base font-semibold text-white">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10.5px] font-medium text-white/65"
          >
            {s}
          </span>
        ))}
      </div>
      {href ? (
        <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/40">
          Visit · {href.replace(/^https?:\/\//, "")}
        </p>
      ) : null}
      </div>
    </Wrapper>
  );
}
