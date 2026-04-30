import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import { Footer } from "@/components/shell/Footer";

export const metadata: Metadata = {
  title: "Artlist Sync™ — Auto-sync music to any cut",
  description:
    "Hypothetical product launch page mock for Artlist. Built in 48 hours by Eliyahu Levi as part of his application: Next.js 16 SSG + ISR, GSAP ScrollTrigger, Framer Motion, Lighthouse 95+.",
  alternates: { canonical: "/launch" },
  openGraph: {
    title: "Artlist Sync™ — a launch page mock",
    description: "48-hour Next.js 16 build. Application landing page by Eliyahu Levi.",
  },
};

export default function LaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <main className="relative">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
