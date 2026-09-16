import { readFile, writeFile, readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_DIR = join(__dirname, "../app");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === ".next" || e.name === "node_modules") continue;
      files.push(...(await walk(full)));
    } else if (/\.(tsx|ts)$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

async function fix(filePath) {
  let src = await readFile(filePath, "utf8");
  const original = src;

  // Remove import { blob } ...
  src = src.replace(/import\s+\{\s*blob\s*\}\s+from\s+['"]@\/app\/lib\/blob['"];?[\r\n]*/g, "");
  src = src.replace(/import\s+blob\s+from\s+['"]@\/app\/lib\/blob['"];?[\r\n]*/g, "");

  // Replace blob("path") with "path"
  // E.g., src={blob("/images/...")} -> src={"/images/..."}
  src = src.replace(/blob\(['"]([^'"]+)['"]\)/g, '"$1"');

  // Fix JSX props: src={"/images/..."} -> src="/images/..."
  src = src.replace(/=\{"([^"]+)"\}/g, '="$1"');
  
  // Fix style={{ backgroundImage: `url(${"/images/..."})` }} -> url(/images/...)
  // Which would become `url(${"/images/..."})` if they used template literals.
  // Actually, let's let prettier fix it, or we can just leave `url(${"/path"})` as it's valid JS.

  if (src === original) return false;
  await writeFile(filePath, src, "utf8");
  console.log(`✓ Fixed ${filePath.replace(APP_DIR, "app")}`);
  return true;
}

async function main() {
  console.log("Removing blob storage usage from codebase...");
  const files = await walk(APP_DIR);
  let count = 0;
  for (const f of files) {
    if (await fix(f)) count++;
  }
  console.log(`\nDone. ${count} files fixed.`);
}

main().catch(console.error);
