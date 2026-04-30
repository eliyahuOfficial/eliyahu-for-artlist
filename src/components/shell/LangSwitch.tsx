"use client";

import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";

export function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-medium",
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
          locale === "en" ? "bg-white text-black" : "text-white/70 hover:text-white",
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
          locale === "he" ? "bg-white text-black" : "text-white/70 hover:text-white",
        )}
        aria-pressed={locale === "he"}
      >
        עב
      </button>
    </div>
  );
}
