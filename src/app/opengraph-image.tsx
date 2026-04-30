import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.fullName} — Frontend Developer for Artlist`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(600px 400px at 80% 20%, rgba(255,95,158,0.45), transparent 60%), radial-gradient(700px 500px at 20% 90%, rgba(92,246,255,0.25), transparent 60%), radial-gradient(500px 400px at 90% 90%, rgba(255,139,61,0.4), transparent 60%), linear-gradient(135deg, #08060f 0%, #1b0a26 40%, #0a0612 100%)",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "linear-gradient(135deg,#ff5f9e,#b65cff,#ff8b3d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            E
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "white" }}>{site.fullName}</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>— for Artlist</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: -2,
              maxWidth: 1040,
            }}
          >
            A music producer who shipped an AI video SaaS applies for Frontend Developer.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Built in Next.js 16 · GSAP · Framer Motion · 48 hours
          </div>
        </div>
      </div>
    ),
    size,
  );
}
