// Edits an existing local image via FAL FLUX-Pro Kontext (text-driven image edit).
// Run with: node scripts/edit-photo.mjs <input> <output> "<edit prompt>"
// Example: node scripts/edit-photo.mjs public/eliyahupro.jpg public/eliyahu-bg.jpg "Replace background with deep wine-red gradient"

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

async function loadFalKey() {
  const envText = await fs.readFile(path.join(ROOT, ".env"), "utf8");
  const match = envText.match(/^FAL_KEY=(.+)$/m);
  if (!match) throw new Error("FAL_KEY not found in .env");
  return match[1].trim();
}

async function uploadToFal(filePath, FAL_KEY) {
  const buf = await fs.readFile(filePath);
  const ext = path.extname(filePath).slice(1).toLowerCase() || "jpg";
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : `image/${ext}`;

  // FAL storage upload — initiate
  const initRes = await fetch("https://rest.alpha.fal.ai/storage/upload/initiate", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      file_name: path.basename(filePath),
      content_type: mime,
    }),
  });
  if (!initRes.ok) {
    const text = await initRes.text();
    throw new Error(`Storage init failed: ${initRes.status} ${text}`);
  }
  const { upload_url, file_url } = await initRes.json();

  // PUT the bytes
  const putRes = await fetch(upload_url, {
    method: "PUT",
    headers: { "Content-Type": mime },
    body: buf,
  });
  if (!putRes.ok) {
    throw new Error(`Storage PUT failed: ${putRes.status}`);
  }

  return file_url;
}

async function edit(imageUrl, prompt, FAL_KEY) {
  const res = await fetch("https://fal.run/fal-ai/flux-pro/kontext", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      image_url: imageUrl,
      output_format: "jpeg",
      safety_tolerance: "5",
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Edit failed: ${res.status} ${text}`);
  }
  const data = await res.json();
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
  const [, , inputArg, outputArg, ...promptParts] = process.argv;
  if (!inputArg || !outputArg || promptParts.length === 0) {
    console.error('Usage: node scripts/edit-photo.mjs <input> <output> "<edit prompt>"');
    process.exit(1);
  }
  const input = path.resolve(ROOT, inputArg);
  const output = path.resolve(ROOT, outputArg);
  const prompt = promptParts.join(" ");

  const FAL_KEY = await loadFalKey();

  console.log(`→ Uploading ${path.relative(ROOT, input)} to FAL storage...`);
  const t0 = Date.now();
  const sourceUrl = await uploadToFal(input, FAL_KEY);
  console.log(`  uploaded (${((Date.now() - t0) / 1000).toFixed(1)}s)`);

  console.log(`→ Editing with FLUX Kontext Max...`);
  console.log(`  prompt: ${prompt.slice(0, 80)}${prompt.length > 80 ? "..." : ""}`);
  const t1 = Date.now();
  const resultUrl = await edit(sourceUrl, prompt, FAL_KEY);
  console.log(`  edit done (${((Date.now() - t1) / 1000).toFixed(1)}s)`);

  console.log(`→ Saving to ${path.relative(ROOT, output)}...`);
  const size = await download(resultUrl, output);
  console.log(`  saved ${(size / 1024).toFixed(0)}KB`);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
