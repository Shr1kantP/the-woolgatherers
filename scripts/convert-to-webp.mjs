import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

async function findPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findPngs(full)));
    } else if (/\.png$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function convert(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  try {
    await sharp(pngPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);

    const [before, after] = await Promise.all([
      stat(pngPath).then((s) => s.size),
      stat(webpPath).then((s) => s.size),
    ]);

    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(
      `✓ ${basename(pngPath)} → ${basename(webpPath)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (${saving}% smaller)`
    );

    // Remove original PNG after successful conversion
    await unlink(pngPath);
  } catch (err) {
    console.error(`✗ ${pngPath}: ${err.message}`);
  }
}

const pngs = await findPngs(PUBLIC_DIR);
console.log(`Found ${pngs.length} PNG files. Converting...\n`);

// Convert in batches of 6 to avoid memory spikes
const BATCH = 6;
for (let i = 0; i < pngs.length; i += BATCH) {
  await Promise.all(pngs.slice(i, i + BATCH).map(convert));
}

console.log("\nDone. All PNGs converted to WebP and originals removed.");
