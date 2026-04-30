import type { Locale } from "@/lib/site";

export type ProjectStat = { label: { en: string; he: string }; value: string };

export type Project = {
  slug: string;
  name: string;
  tagline: { en: string; he: string };
  description: { en: string; he: string };
  stack: string[];
  stats: ProjectStat[];
  accent: string;
  href?: string;
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "felora",
    name: "FELORA",
    featured: true,
    href: "https://felora.app",
    image: "/felora.jpg",
    tagline: {
      en: "AI video SaaS. One developer. Live in production.",
      he: "ה-SaaS וידאו AI. מפתח אחד. מוצר חי.",
    },
    description: {
      en: "Workspace platform that generates social-media content with a consistent AI character across every scene — beach, restaurant, retail, spa. End-to-end checkout with tiered credits, role-based admin with audit logs, RTL i18n, BullMQ-backed video render queue, TikTok OAuth, ContentStudioPage at 81KB of conditional rendering. Live, no shortcuts.",
      he: "פלטפורמת workspace שמייצרת תוכן רשתות חברתיות עם דמות AI עקבית בכל סצנה — חוף, מסעדה, חנות, ספא. תשלומים עובדים מקצה לקצה עם קרדיטים מדורגים, ניהול הרשאות עם audit logs, i18n עם RTL, תור רינדור וידאו על BullMQ, TikTok OAuth, ContentStudioPage באורך 81KB של רנדור מותנה. חי, בלי קיצורי דרך.",
    },
    stack: [
      "React 18",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "React Query",
      "Radix UI",
      "Express",
      "BullMQ",
      "Remotion",
      "FAL AI",
      "MongoDB",
    ],
    stats: [
      { label: { en: "TS files", he: "קבצי TS" }, value: "164" },
      { label: { en: "Apps in monorepo", he: "אפים במונורפו" }, value: "3" },
      { label: { en: "Languages (i18n)", he: "שפות" }, value: "EN · HE · RTL" },
      { label: { en: "ESLint warnings", he: "אזהרות ESLint" }, value: "0" },
    ],
    accent: "from-fuchsia-500 via-pink-500 to-orange-400",
  },
  {
    slug: "moodai",
    name: "Lumood",
    href: "https://lumood.app",
    image: "/lumood.jpg",
    tagline: {
      en: "Social mood-sharing PWA with WebRTC",
      he: "PWA חברתית לשיתוף מצב-רוח עם WebRTC",
    },
    description: {
      en: "Capture a mood + location → AI generates a Polaroid + caption. Real-time video calls, push notifications, full SEO/OG/JSON-LD. Framer Motion drives the reveal animations.",
      he: "אוספים מצב-רוח + מיקום → AI מחולל פולארויד + כותרת. שיחות וידאו בזמן אמת, push notifications, SEO/OG/JSON-LD מלא. Framer Motion מפעיל את אנימציות החשיפה.",
    },
    stack: [
      "React 18",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Socket.io",
      "Leaflet",
      "html2canvas",
      "PWA",
      "Cloudinary",
      "VAPID",
    ],
    stats: [
      { label: { en: "Pages", he: "דפים" }, value: "32+" },
      { label: { en: "Real-time channels", he: "ערוצי realtime" }, value: "WebRTC + Socket.io" },
      { label: { en: "Lighthouse SEO", he: "Lighthouse SEO" }, value: "100" },
      { label: { en: "Install target", he: "התקנה" }, value: "PWA / iOS / Android" },
    ],
    accent: "from-violet-500 via-indigo-500 to-cyan-400",
  },
  {
    slug: "triton",
    name: "Project Triton",
    image: "/triton.jpg",
    tagline: {
      en: "AI website builder + 322-section template library",
      he: "בונה אתרים AI + ספריית 322 תבניות סקשן",
    },
    description: {
      en: "Adaptive briefing system → AI generates a tailored landing page from a bank of 322 hand-coded section templates: hero variants, testimonial layouts, pricing matrices, CTAs. Domain readiness scoring & user-flow simulation.",
      he: "מערכת תשאול אדפטיבית → AI מחולל דף נחיתה מותאם מתוך מאגר של 322 תבניות סקשן כתובות יד: וריאנטים של hero, פריסות עדויות, מטריצות מחיר, CTAs. ניקוד מוכנות-דומיין וסימולציית user-flow.",
    },
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Express",
      "Google GenAI",
      "Puppeteer",
      "Sharp",
      "Supabase",
    ],
    stats: [
      { label: { en: "Section templates", he: "תבניות סקשן" }, value: "322" },
      { label: { en: "Generation latency", he: "השהיית יצירה" }, value: "~8s p95" },
      { label: { en: "Languages supported", he: "שפות" }, value: "EN · HE" },
    ],
    accent: "from-emerald-400 via-teal-400 to-sky-400",
  },
];

export function pickL<T>(obj: { en: T; he: T }, locale: Locale): T {
  return obj[locale];
}
