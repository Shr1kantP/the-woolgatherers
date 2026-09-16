/**
 * Fixes blob() calls in JSX attributes — wraps them in {}
 * before: src=blob("/images/...")
 * after:  src={blob("/images/...")}
 */
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

  // Fix JSX props: src=blob("...") → src={blob("...")}
  // Matches any JSX attribute name followed by =blob(
  src = src.replace(/(\w+)=blob\(/g, "$1={blob(");

  // Now we have: src={blob("/images/...") — missing closing }
  // Fix: ={blob("...")} that's already correct vs ={blob("...") without }
  // Pattern: ={blob("path")} - if already has } after ) leave it
  // Pattern: ={blob("path") followed by space or newline or > — add }
  src = src.replace(/=\{blob\("([^"]+)"\)([^}])/g, (match, path, after) => {
    return `={blob("${path}")}${after}`;
  });

  if (src === original) return false;
  await writeFile(filePath, src, "utf8");
  console.log(`✓ ${filePath.replace(APP_DIR, "app")}`);
  return true;
}

const files = await walk(APP_DIR);
let count = 0;
for (const f of files) {
  if (await fix(f)) count++;
}
console.log(`\nDone. ${count} files fixed.`);
