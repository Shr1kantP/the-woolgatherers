import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const APP_DIR = path.join(__dirname, '../app');

const unusedFonts = [
  'INTER-BOLDITALIC.OTF',
  'INTER-EXTRABOLD.OTF',
  'INTER-EXTRABOLDITALIC.OTF',
  'INTER-ITALIC.OTF',
  'INTER-MEDIUM.OTF',
  'INTER-MEDIUMITALIC.OTF',
  'INTER-SEMIBOLD.OTF',
  'INTER-SEMIBOLDITALIC.OTF',
  'INTER[SLNT,WGHT].TTF',
  'OSWALD-LIGHT.TTF',
  'OSWALD-REGULAR.TTF'
];

async function removeUnusedFonts() {
  console.log('Removing unused fonts...');
  for (const font of unusedFonts) {
    const fontPath = path.join(PUBLIC_DIR, 'fonts', font);
    try {
      await fs.unlink(fontPath);
      console.log(`✓ Removed ${font}`);
    } catch (err) {
      if (err.code !== 'ENOENT') console.error(`Error removing ${font}:`, err.message);
    }
  }
}

// Recursively walks a directory, renaming folders and files to lowercase/no-spaces
// Returns a mapping of { oldRelPath: newRelPath }
async function normalizePaths(dir, baseDir, map = {}) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const oldFullPath = path.join(dir, entry.name);
    
    // Create new name: lowercase and spaces to hyphens
    let newName = entry.name.toLowerCase().replace(/\s+/g, '-');
    const newFullPath = path.join(dir, newName);

    const oldRel = oldFullPath.replace(baseDir, '').replace(/\\/g, '/');
    const newRel = newFullPath.replace(baseDir, '').replace(/\\/g, '/');

    if (entry.name !== newName) {
      // We must rename it
      await fs.rename(oldFullPath, newFullPath);
      map[oldRel] = newRel;
      console.log(`Renamed: ${oldRel} -> ${newRel}`);
    }

    if (entry.isDirectory()) {
      // Traverse the new path since we might have just renamed it
      await normalizePaths(newFullPath, baseDir, map);
    }
  }
  return map;
}

// Walks code files and replaces occurrences of old paths with new paths
async function updateCodeReferences(dir, pathMap) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      await updateCodeReferences(fullPath, pathMap);
    } else if (/\.(tsx|ts|css|js|mjs)$/.test(entry.name)) {
      let content = await fs.readFile(fullPath, 'utf8');
      let originalContent = content;

      // Reverse sort the map keys so we replace longer paths first (to avoid partial replacements)
      const sortedKeys = Object.keys(pathMap).sort((a, b) => b.length - a.length);

      for (const oldRel of sortedKeys) {
        // e.g. oldRel = "/images/Vahdam/Vahdam_1.jpg"
        // we want to replace it case-insensitively in case developers typed it wrong
        // but we must be careful. We'll search for the exact old path string, but since 
        // windows is case insensitive, they might have typed "/images/vahdam/vahdam_1.jpg" already.
        // If they already typed the new path, it's fine. If they typed the old path, we update it.
        
        // Escape regex special chars
        const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapeRegExp(oldRel), 'gi'); // Case-insensitive replace
        
        content = content.replace(regex, pathMap[oldRel]);
      }

      if (content !== originalContent) {
        await fs.writeFile(fullPath, content, 'utf8');
        console.log(`✓ Updated references in ${entry.name}`);
      }
    }
  }
}

async function main() {
  await removeUnusedFonts();

  console.log('\nNormalizing filenames in public directory (images and fonts)...');
  const imagesMap = await normalizePaths(path.join(PUBLIC_DIR, 'images'), PUBLIC_DIR);
  const fontsMap = await normalizePaths(path.join(PUBLIC_DIR, 'fonts'), PUBLIC_DIR);
  
  const combinedMap = { ...imagesMap, ...fontsMap };

  if (Object.keys(combinedMap).length > 0) {
    console.log('\nUpdating code references in /app ...');
    await updateCodeReferences(APP_DIR, combinedMap);
    
    // Also update globals.css specifically if it's in a different spot, but it should be in /app
    console.log('Finished updating code.');
  } else {
    console.log('\nNo files needed renaming.');
  }
}

main().catch(console.error);
