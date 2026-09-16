/**
 * Replaces all "/images/..." string literals in .tsx/.ts files
 * with blob("/images/...") calls and adds the import if needed.
 * Skips: CSS url() calls, SVG mask-image inline styles (kept as-is),
 *        blob.ts itself, and node_modules/.next.
 */

import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_DIR = join(__dirname, "../app");

const BLOB_IMPORT = `import { blob } from "@/app/lib/blob";`;

// Paths that must NOT be converted (SVG used in CSS mask — not an img src)
const SKIP_PATTERNS = [
  "keyhole-white.svg",
  "keyhole-black.svg",
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === ".next" || e.name === "node_modules") continue;
      files.push(...(await walk(full)));
    } else if (/\.(tsx|ts)$/.test(e.name)) {
      if (full.endsWith("blob.ts")) continue;
      files.push(full);
    }
  }
  return files;
}

function shouldSkip(path) {
  return SKIP_PATTERNS.some((p) => path.includes(p));
}

async function processFile(filePath) {
  let src = await readFile(filePath, "utf8");
  const original = src;

  // Match string literals like "/images/..." in JSX props, style objects, CSS-in-JS
  // Handles: src="/images/...", backgroundImage: "url('/images/...')", src={`/images/...`}
  let changed = false;

  // 1. Double-quoted: "/images/..."  →  blob("/images/...")
  src = src.replace(/"(\/images\/[^"]+)"/g, (match, path) => {
    if (shouldSkip(path)) return match;
    changed = true;
    return `blob("${path}")`;
  });

  // 2. Single-quoted: '/images/...'  →  blob('/images/...')  (inside TS data arrays etc)
  src = src.replace(/'(\/images\/[^']+)'/g, (match, path) => {
    if (shouldSkip(path)) return match;
    changed = true;
    return `blob("${path}")`;
  });

  // 3. backgroundImage CSS-in-JS: url(blob("/images/..."))  →  already done by step 1,
  //    but the result will look like: "url(blob("/images/..."))" which is broken.
  //    Fix: wrap correctly as  `url(${blob("/images/...")})`
  src = src.replace(/"url\(blob\("(\/[^"]+)"\)\)"/g, (_, path) => {
    changed = true;
    return `\`url(\${blob("${path}")})\``;
  });

  if (!changed) return false;

  // Add import if not already present
  if (!src.includes('from "@/app/lib/blob"') && !src.includes("from '../lib/blob'") && !src.includes('from "./blob"')) {
    // Insert after the last import line
    const lastImportIdx = [...src.matchAll(/^import .+/gm)].pop();
    if (lastImportIdx) {
      const insertAt = lastImportIdx.index + lastImportIdx[0].length;
      src = src.slice(0, insertAt) + "\n" + BLOB_IMPORT + src.slice(insertAt);
    } else {
      src = BLOB_IMPORT + "\n" + src;
    }
  }

  await writeFile(filePath, src, "utf8");
  console.log(`✓ ${filePath.replace(APP_DIR, "app")}`);
  return true;
}

const files = await walk(APP_DIR);
let count = 0;
for (const f of files) {
  if (await processFile(f)) count++;
}
console.log(`\nDone. ${count} files updated.`);
