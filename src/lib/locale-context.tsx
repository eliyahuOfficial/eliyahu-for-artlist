"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultLocale, locales, type Locale } from "@/lib/site";

type LocaleCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  dir: "ltr" | "rtl";
};

const Ctx = createContext<LocaleCtx | null>(null);

const STORAGE_KEY = "efa.locale";

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? defaultLocale);

  // Hydrate from localStorage if user has a preference
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && locales.includes(saved) && saved !== locale) {
        setLocaleState(saved);
      }
    } catch {
      /* no-op */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reflect on <html> for RTL + lang
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === "he" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* no-op */
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(
    () => setLocaleState((cur) => (cur === "en" ? "he" : "en")),
    [],
  );

  const value = useMemo<LocaleCtx>(
    () => ({
      locale,
      setLocale,
      toggle,
      dir: locale === "he" ? "rtl" : "ltr",
    }),
    [locale, setLocale, toggle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
