import type { Locale } from "@/lib/site";

type Bilingual = Record<Locale, string>;

const t = (en: string, he: string): Bilingual => ({ en, he });

export const copy = {
  nav: {
    work: t("Work", "פרויקטים"),
    launch: t("Mock Launch", "השקה"),
    why: t("Why me", "למה אני"),
    contact: t("Contact", "צור קשר"),
    cta: t("Let's talk", "בואו נדבר"),
  },

  hero: {
    eyebrow: t(
      "Application for Frontend Developer · Marketing Technology · Artlist",
      "מועמדות ל-Frontend Developer · Marketing Technology · Artlist",
    ),
    title_a: t("Most developers build pages.", "רוב המפתחים בונים דפים."),
    title_b: t("I ship marketing systems", "אני משיק מערכות שיווקיות"),
    title_c: t("that feel like products.", "שמרגישות כמו מוצרים."),
    subtitle: t(
      "FELORA is the proof: a multi-tenant AI video SaaS I built alone — Stripe billing, multi-workspace admin, video render pipeline, RTL i18n, 164 TypeScript files, paying customers. The page you're reading was built in three days with Next.js 16, GSAP, and Framer Motion. Apply that energy to Artlist's campaign roadmap.",
      "FELORA היא ההוכחה: SaaS וידאו AI מרובה-לקוחות שבניתי לבד — Stripe, ניהול workspaces, פייפליין רינדור וידאו, i18n עם RTL, 164 קבצי TypeScript, לקוחות משלמים. הדף שאתם קוראים נבנה בשלושה ימים ב-Next.js 16, GSAP ו-Framer Motion. תיישמו את האנרגיה הזו על מפת הקמפיינים של Artlist.",
    ),
    cta_primary: t("See FELORA & friends", "ראו את FELORA וחברים"),
    cta_secondary: t("Watch the launch page mock", "צפו בדף ההשקה"),
    cta_felora: t("FELORA · live", "FELORA · חי"),
    audio_label: t("Listening: Eliyahu (IL) — original release", "מאזין כרגע: Eliyahu (IL) — שחרור מקורי"),
  },

  built: {
    eyebrow: t("Three products. Solo. From scratch.", "שלושה מוצרים. לבד. מאפס."),
    title: t("What I built before this page existed", "מה שבניתי לפני שהדף הזה היה קיים"),
    subtitle: t(
      "Each of these is a working product, deployed and used by humans. Numbers are real — counted from the codebase, not estimated. FELORA is the headliner.",
      "כל אחד פה הוא מוצר עובד, פרוס, שמשתמשים בו. המספרים אמיתיים — נספרו מהקוד, לא הערכה. FELORA היא הכוכבת.",
    ),
    felora_badge: t("Featured · Solo-built · Live in production", "ראשי · נבנה לבד · חי בפרודקשן"),
    felora_pull: t(
      "Stripe billing. Multi-workspace admin. Video render queue. RTL i18n. AI character that stays consistent across every scene. 164 TypeScript files, max-warnings 0, customers paying. This is the kind of work I'd bring to your campaign tooling.",
      "חיוב Stripe. ניהול workspaces. תור רינדור וידאו. i18n עם RTL. דמות AI שנשארת עקבית בכל סצנה. 164 קבצי TypeScript, max-warnings 0, לקוחות משלמים. זאת העבודה שהייתי מביא לכלים השיווקיים שלכם.",
    ),
    client_eyebrow: t(
      "Plus paid client work · WordPress + Elementor Pro",
      "ובנוסף — עבודת לקוחות בתשלום · WordPress + Elementor Pro",
    ),
    client_body: t(
      "Working business sites with Hebrew RTL, conversion sections, contact funnels, SEO foundations. Live example →",
      "אתרי לקוחות עובדים בעברית עם RTL, סקציות המרה, פאנלי יצירת קשר, ובסיס SEO. דוגמה חיה ←",
    ),
  },

  pearl: {
    eyebrow: t(
      "The interview project — built in 48 hours",
      "פרויקט ההגשה — נבנה ב-48 שעות",
    ),
    title: t(
      "Artlist Sync™ — a launch page I designed for a product you don't have yet",
      "Artlist Sync™ — דף השקה שעיצבתי למוצר שעוד לא קיים אצלכם",
    ),
    subtitle: t(
      "If your team launched an AI tool that auto-syncs your music library to any video timeline, this is the marketing page I'd ship. Built with Next.js 16 (SSG + ISR), GSAP ScrollTrigger, Framer Motion. Lighthouse 95+. Source on GitHub.",
      "אם הצוות שלכם היה משיק כלי AI שמסנכרן אוטומטית מוסיקה לוידאו, זה דף השקה שהייתי שולח. נבנה ב-Next.js 16 (SSG + ISR), GSAP ScrollTrigger, Framer Motion. Lighthouse 95+. הקוד פתוח ב-GitHub.",
    ),
    cta: t("Open the launch page", "פתחו את דף ההשקה"),
    cta_source: t("View source on GitHub", "הקוד ב-GitHub"),
  },

  why: {
    eyebrow: t("Why me, in 60 seconds", "למה אני, ב-60 שניות"),
    title: t("The same hands that mix a track ship a feature.", "אותן ידיים שמערבלות טראק משיקות פיצ'ר."),
    points: [
      t(
        "I am Artlist's customer profile. I write and release music as Eliyahu (IL), I edit my own videos in CapCut, I license stock from platforms like yours. I know — viscerally — what creators come to a marketing page looking for, because I am the one looking for it.",
        "אני בדיוק הפרופיל של לקוח Artlist. אני כותב ומשחרר מוזיקה תחת Eliyahu (IL), עורך וידאו ב-CapCut, ולוקח רישיונות סטוק מפלטפורמות כמו שלכם. אני יודע — מהבטן — מה יוצרים מחפשים בדף שיווקי, כי אני זה שמחפש.",
      ),
      t(
        "I shipped FELORA — a multi-tenant SaaS with Stripe, multi-workspace admin, role-based access, AI video pipeline, RTL i18n, and a tiered credit system — alone. 164 TypeScript files, max-warnings 0, no shortcuts. The product is live. Right now I'm building the consumer app for Iconiq during the day.",
        "השקתי את FELORA — SaaS מרובה-לקוחות עם Stripe, ניהול workspace, הרשאות לפי תפקיד, פייפליין וידאו AI, i18n עם RTL, ומערכת קרדיטים מדורגת — לבד. 164 קבצי TypeScript, max-warnings 0, בלי קיצורי דרך. המוצר חי. ביום אני בונה את האפליקציה הצרכנית של Iconiq.",
      ),
      t(
        "Marketing technology is exactly where I live. I build paid client websites in WordPress + Elementor Pro, I built Project Triton — a 322-template landing-page generator — and I've shipped SEO meta, OG, JSON-LD, and conversion funnels not as theory but because the page needed them by Friday.",
        "Marketing Technology זה בדיוק הבית שלי. אני בונה אתרי לקוחות בתשלום ב-WordPress + Elementor Pro, בניתי את Project Triton — גנרטור עם 322 תבניות לדפי נחיתה — והשקתי SEO, OG, JSON-LD ופאנלי המרה לא כתאוריה — כי הדף היה צריך אותם עד יום שישי.",
      ),
      t(
        "I'm closing the gaps in public. Five years writing code (three before HackerU, two since). My production stack is React + Vite, not Next.js — so I built this very page in Next.js 16 with App Router, SSG, ISR, GSAP, and Framer Motion. The gap closes faster than the hiring cycle.",
        "אני סוגר את הפערים מול כולם. חמש שנות קוד (שלוש לפני HackerU, שתיים אחרי). הסטאק בפרודקשן שלי הוא React + Vite, לא Next.js — אז בניתי את הדף הזה בעצמו ב-Next.js 16 עם App Router, SSG, ISR, GSAP, ו-Framer Motion. הפער נסגר מהר יותר ממחזור הגיוס.",
      ),
    ],
  },

  about: {
    eyebrow: t("About me", "קצת עליי"),
    title: t(
      "Frontend by day. Music by night. Marketing technology in between.",
      "פרונט-אנד ביום. מוזיקה בלילה. Marketing Technology בין לבין.",
    ),
    body: t(
      "I'm Eliyahu Levi — based in Tel Aviv, building consumer features at Iconiq for the past year. Before that I shipped FELORA solo, built paying client sites with WordPress + Elementor, planned an AI website builder (Project Triton) with 322 hand-coded section templates, and kept a music release schedule under Eliyahu (IL). Multidisciplinary isn't a tagline — it's how I think about every page I ship.",
      "שמי אליהו לוי — תל אביב, השנה האחרונה אני בונה פיצ'רים צרכניים ב-Iconiq. קודם לכן השקתי את FELORA לבד, בניתי אתרי לקוחות בתשלום ב-WordPress + Elementor, תכננתי בונה אתרים AI (Project Triton) עם 322 תבניות סקשן כתובות יד, ושמרתי על לוח שחרורי מוזיקה תחת Eliyahu (IL). מולטי-דיסציפלינארי זה לא tagline — זאת הדרך שבה אני חושב על כל דף שאני משחרר.",
    ),
    stat_years_label: t("Coding", "קוד"),
    stat_years_value: t("5 years (3 pre-HackerU)", "5 שנים (3 לפני HackerU)"),
    stat_role_label: t("Now", "עכשיו"),
    stat_role_value: t("1 year @ Iconiq", "שנה ב-Iconiq"),
    stat_ship_label: t("Solo products shipped", "מוצרים שהשקתי לבד"),
    stat_ship_value: t("3 (FELORA · MoodAI · Triton)", "3 (FELORA · MoodAI · Triton)"),
    releases: t("Releases as Eliyahu (IL)", "שחרורים בתור Eliyahu (IL)"),
    also_at: t("There's a second alias too —", "יש גם שם אמן שני —"),
    second_alias: t("here on Spotify", "פה ב-Spotify"),
  },

  cta: {
    eyebrow: t("If any of this resonated", "אם משהו מזה דיבר אליכם"),
    title: t("Let's spend 30 minutes together.", "בואו ניפגש ל-30 דקות."),
    subtitle: t(
      "I'm in Tel Aviv, available evenings and Sundays for a first call. Bring a hard problem from your roadmap — I'll come with a sketch.",
      "אני בתל אביב, פנוי לערבים וימי ראשון לשיחה ראשונה. תבואו עם בעיה אמיתית מהרודמאפ שלכם — אני אבוא עם סקיצה.",
    ),
    btn_meet: t("Book a 30-min call", "תיאום שיחה (30 דק')"),
    btn_whatsapp: t("Or WhatsApp", "או WhatsApp"),
    btn_email: t("Email", "אימייל"),
  },

  footer: {
    sound_credit: t(
      "Background loop: an unreleased Eliyahu (IL) demo. Use the toggle to mute.",
      "לופ ברקע: דמו לא רשמי של Eliyahu (IL). אפשר להשתיק עם הכפתור.",
    ),
    rights: t(
      "Built with Next.js 16, Framer Motion, GSAP. Source available — ask.",
      "נבנה ב-Next.js 16, Framer Motion, GSAP. הקוד זמין — בקשו.",
    ),
  },
} as const;

export function pick(b: Bilingual, locale: Locale) {
  return b[locale];
}
