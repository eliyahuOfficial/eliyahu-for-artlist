// Generates Magnific-style hero/CTA images via FAL FLUX-Pro 1.1 Ultra.
// Run with: node scripts/generate-images.mjs [filter]
//   filter — optional substring to match a single image name (e.g. "hero-home")
//
// Reads FAL_KEY from .env at the project root.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const PROMPTS = [
  {
    filename: "hero-home.jpg",
    prompt:
      "Editorial fashion photography, 16:9 wide composition. A single woman dancer mid-movement in a flowing oversized black tailored suit, captured in a dynamic spinning gestural pose with one arm raised gracefully. Heavy motion blur on the moving limbs, hair flying, fabric trailing through the air. The subject is positioned on the RIGHT THIRD of the frame, leaving the LEFT TWO-THIRDS as empty negative space — a clean deep wine-red and burgundy studio backdrop with subtle vertical gradient (slightly darker at top). The figure's face is softly motion-blurred. Soft directional studio strobe lighting from above-right. Mood: kinetic, confident, magnetic, high-end editorial. Style: exact aesthetic of Magnific.com hero photography, Steven Meisel for Vogue, Comme des Garçons campaign. Cinematic studio photography only, no environment, no props. No text, no logos, no watermarks.",
  },
  {
    filename: "cta-home.jpg",
    prompt:
      "Editorial fashion photography, 16:9. A single figure standing in a strong, powerful stance with arms extended to the sides, wearing a flowing dark suit. Sharp silhouette with subtle motion trails on the fabric. Photographed against a deep wine-red and magenta gradient studio backdrop. Soft studio lighting with magenta rim light from the right. Mood: decisive, magnetic, ready. Style: high-end fashion magazine cover, Issey Miyake campaign aesthetic, Magnific.com aesthetic. Studio photography, no environment. No text.",
  },
  {
    filename: "launch-hero.jpg",
    prompt:
      "Editorial fashion photography, 16:9. A figure caught mid-stride or jumping, captured in a dynamic kinetic pose against a wine-red gradient studio backdrop. Wearing flowing dark layered clothing that creates strong motion trails through the air. Studio strobe lighting with magenta accent on the background. Mood: kinetic, urgent, electrifying. Style: high-fashion editorial, Helmut Newton studio aesthetic, Magnific hero aesthetic. Studio photography only, no environment. No text.",
  },
  {
    filename: "launch-cta.jpg",
    prompt:
      "Editorial fashion photography, 16:9. A figure standing tall, arms slightly raised in a triumphant pose, wearing flowing dark fabric. Photographed against a deep wine-red studio backdrop with a vertical magenta light streak behind the figure. Sharp silhouette, soft studio lighting. Mood: triumphant, decisive, on the verge. Style: high-end fashion editorial, Magnific.com aesthetic. Studio photography only, no environment. No text.",
  },
  {
    filename: "section-break-music.jpg",
    prompt:
      "Cinematic medium shot. Hands at a Cubase mixing console, glowing knobs and faders in magenta and warm amber light, deep wine-red ambient backlight. Blurred sheet music in the foreground. Mood: intimate, professional, multidisciplinary. Warm editorial photography. No text, no logos.",
  },
  {
    filename: "og-magnific.jpg",
    prompt:
      "Editorial typographic poster. Strong serif word ELIYAHU in cream parchment color centered on a deep wine-red background, with a single magenta diagonal accent line cutting from upper-left to lower-right corner. Below the word in smaller sans-serif: Frontend Developer for Artlist. Minimal, bold, editorial poster style. Cream paper, wine red, magenta accents only.",
  },
  {
    filename: "step-01-drop.jpg",
    aspect_ratio: "3:4",
    prompt:
      "Editorial fashion photography, 3:4 vertical. A figure in a flowing oversized black tailored coat captured mid-fall, hair and fabric streaming upward as she falls toward camera. Heavy motion blur on every limb and the fabric. Deep wine-red and burgundy studio backdrop with subtle vertical gradient. Soft directional studio strobe lighting from above. Mood: weightless, dropping, kinetic. Style: high-end fashion editorial, Steven Meisel for Vogue, Magnific aesthetic. Studio photography only, no environment. No text, no logos.",
  },
  {
    filename: "step-02-detect.jpg",
    aspect_ratio: "3:4",
    prompt:
      "Editorial fashion photography, 3:4 vertical. A close-up half-body portrait of a woman with eyes closed in deep concentration, hand raised gently to her ear in a listening gesture, wearing a flowing dark high-collar tailored coat. Soft side rim light catching her cheekbone and jawline. Deep wine-red gradient studio backdrop. Mood: attentive, intuitive, focused inward. Style: high-end fashion editorial, Comme des Garçons campaign aesthetic, Magnific aesthetic. Studio photography only. No text, no logos.",
  },
  {
    filename: "step-03-lock.jpg",
    aspect_ratio: "3:4",
    prompt:
      "Editorial fashion photography, 3:4 vertical. A figure in a sharp tailored black suit standing perfectly still, hands clasped firmly together at chest level in a locked decisive gesture. Crisp silhouette against a deep wine-red and burgundy gradient studio backdrop. Strong directional lighting creating clean dramatic shadows. Mood: precise, decisive, locked-in, controlled. Style: high-end fashion editorial, Helmut Newton aesthetic, Magnific aesthetic. Studio photography only. No text.",
  },
  {
    filename: "step-04-tug.jpg",
    aspect_ratio: "3:4",
    prompt:
      "Editorial fashion photography, 3:4 vertical. A figure pulling at the lapel of a flowing oversized black coat, fabric stretched and twisted from the motion, captured mid-pull. Loose hair lightly disturbed by the movement. Deep wine-red gradient studio backdrop. Soft warm directional studio light. Mood: tactile, kinetic, expressive, hands-on. Style: high-end fashion editorial, Magnific aesthetic. Studio photography only, no environment. No text.",
  },
];

async function loadFalKey() {
  const envText = await fs.readFile(path.join(ROOT, ".env"), "utf8");
  const match = envText.match(/^FAL_KEY=(.+)$/m);
  if (!match) throw new Error("FAL_KEY not found in .env");
  return match[1].trim();
}

async function generate(prompt, FAL_KEY, aspect_ratio = "16:9") {
  const response = await fetch("https://fal.run/fal-ai/flux-pro/v1.1-ultra", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio,
      output_format: "jpeg",
      num_images: 1,
      enable_safety_checker: false,
      raw: false,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`FAL request failed: ${response.status} ${text}`);
  }
  const data = await response.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error(`No image URL in response: ${JSON.stringify(data)}`);
  return url;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buffer);
  return buffer.length;
}

async function main() {
  const filter = process.argv[2];
  const FAL_KEY = await loadFalKey();
  const targets = filter
    ? PROMPTS.filter((p) => p.filename.includes(filter))
    : PROMPTS;

  if (targets.length === 0) {
    console.error(`No prompts match filter "${filter}"`);
    process.exit(1);
  }

  console.log(`Generating ${targets.length} image(s) via FAL FLUX-Pro 1.1 Ultra...`);
  console.log(`Estimated cost: ~$${(targets.length * 0.06).toFixed(2)}`);
  console.log("");

  for (const { filename, prompt } of targets) {
    const t0 = Date.now();
    process.stdout.write(`→ ${filename}  `);
    try {
      const url = await generate(prompt, FAL_KEY);
      const dest = path.join(ROOT, "public", filename);
      const size = await download(url, dest);
      const ms = Date.now() - t0;
      console.log(`OK  (${(size / 1024).toFixed(0)}KB, ${(ms / 1000).toFixed(1)}s)`);
    } catch (err) {
      console.log("FAIL");
      console.error(`   ${err.message}`);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
