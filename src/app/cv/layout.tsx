import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliyahu Levi — CV",
  description: "One-page CV. Frontend developer · Marketing Technology candidate at Artlist.",
  robots: { index: false, follow: false },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <main className="cv-page bg-paper-warm">{children}</main>;
}
