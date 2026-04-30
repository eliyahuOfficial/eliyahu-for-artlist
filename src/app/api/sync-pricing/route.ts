import { NextResponse } from "next/server";
import { SYNC_PRICING } from "@/data/pricing";

// Demonstrates ISR-style data: this route is the "remote" pricing source
// the /launch page revalidates against every 60 seconds.
// In a real engagement it would hit a CMS or feature-flag service.
export const dynamic = "force-static";
export const revalidate = 60;

export async function GET() {
  return NextResponse.json({
    plans: SYNC_PRICING,
    fetchedAt: new Date().toISOString(),
  });
}
