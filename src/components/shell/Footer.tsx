"use client";

import { useLocale } from "@/lib/locale-context";
import { copy, pick } from "@/content/copy";
import { site } from "@/lib/site";

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>{pick(copy.footer.sound_credit, locale)}</p>
          <p>{pick(copy.footer.rights, locale)}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
          <span className="opacity-30">·</span>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <span className="opacity-30">·</span>
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <span className="opacity-30">·</span>
          <a href={site.spotifyArtistA} target="_blank" rel="noreferrer" className="hover:text-white">
            Spotify
          </a>
        </div>
      </div>
    </footer>
  );
}
