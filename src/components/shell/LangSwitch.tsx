"use client";

import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";

export function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-ink/15 bg-paper/70 p-1 text-xs font-medium backdrop-blur-sm",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "h-7 rounded-full px-3 transition-colors",
          locale === "en" ? "bg-ink text-paper" : "text-ink-muted hover:text-ink",
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("he")}
        className={cn(
          "h-7 rounded-full px-3 transition-colors",
          locale === "he" ? "bg-ink text-paper" : "text-ink-muted hover:text-ink",
        )}
        aria-pressed={locale === "he"}
      >
        עב
      </button>
    </div>
  );
}
