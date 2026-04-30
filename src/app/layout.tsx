import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces, Heebo, Frank_Ruhl_Libre } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Frontend Developer for Artlist`,
    template: `%s · ${site.fullName}`,
  },
  description:
    "Music producer turned solo AI-product engineer applying for Frontend Developer at Artlist. Built FELORA (multi-tenant AI video SaaS), MoodAI (social PWA), and Project Triton (322-template landing-page generator) — alone. This very page is my Next.js 16 / GSAP / Framer Motion application.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "Artlist",
    "Marketing Technology",
    "GSAP",
    "Framer Motion",
    "Tel Aviv",
    "Eliyahu",
    "creator engineer",
  ],
  authors: [{ name: site.fullName }],
  alternates: {
    canonical: site.url,
    languages: {
      en: site.url,
      he: `${site.url}?lang=he`,
    },
  },
  openGraph: {
    type: "website",
    title: `${site.fullName} — Frontend Developer for Artlist`,
    description:
      "Music producer turned solo AI-product engineer. This is my application — built in Next.js 16 with GSAP and Framer Motion.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/og-magnific.jpg",
        width: 1920,
        height: 1080,
        alt: `${site.fullName} — Frontend Developer for Artlist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — Frontend Developer for Artlist`,
    description:
      "Built FELORA, MoodAI, Project Triton — solo. This very page is my Next.js application.",
    images: ["/og-magnific.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${heebo.variable} ${frankRuhlLibre.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.fullName,
              url: site.url,
              email: site.email,
              jobTitle: "Frontend Developer",
              homeLocation: site.location,
              sameAs: [site.linkedin, site.github, site.spotifyArtistA, site.spotifyArtistB].filter(Boolean),
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "GSAP",
                "AI product engineering",
                "Marketing technology",
              ],
            }),
          }}
        />
      </head>
      <body className="relative min-h-svh bg-paper text-ink">
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
