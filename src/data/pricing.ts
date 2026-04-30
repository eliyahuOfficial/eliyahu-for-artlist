export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  cadence: "month" | "year";
  perks: string[];
  badge?: string;
};

export const SYNC_PRICING: PricingPlan[] = [
  {
    id: "free",
    name: "Studio Trial",
    price: 0,
    cadence: "month",
    perks: ["3 syncs / month", "720p preview", "Watermarked exports"],
  },
  {
    id: "creator",
    name: "Creator",
    price: 14,
    cadence: "month",
    perks: [
      "Unlimited syncs",
      "4K exports",
      "Stem-aware locking",
      "Color-graded markers",
    ],
    badge: "Most popular",
  },
  {
    id: "team",
    name: "Studio Team",
    price: 49,
    cadence: "month",
    perks: [
      "Everything in Creator",
      "Up to 5 seats",
      "Shared Sync Library",
      "API access (1000 calls/mo)",
    ],
  },
];
