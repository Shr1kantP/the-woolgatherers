import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImagesDir = path.join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function processDirectory(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
          console.log(`Processing: ${fullPath}`);
          try {
            const image = sharp(fullPath);
            const metadata = await image.metadata();
            
            let processedImage = image;
            if (metadata.width > MAX_WIDTH) {
              processedImage = processedImage.resize({ width: MAX_WIDTH, withoutEnlargement: true });
            }

            const tempPath = fullPath + '.temp' + ext;
            
            if (ext === '.png') {
              await processedImage.png({ quality: QUALITY, compressionLevel: 8 }).toFile(tempPath);
            } else if (ext === '.jpg' || ext === '.jpeg') {
              await processedImage.jpeg({ quality: QUALITY }).toFile(tempPath);
            } else if (ext === '.webp') {
              await processedImage.webp({ quality: QUALITY }).toFile(tempPath);
            }

            await fs.copyFile(tempPath, fullPath);
            await fs.unlink(tempPath);
            console.log(`Successfully optimized: ${entry.name}`);
          } catch (error) {
            console.error(`Error processing ${entry.name}:`, error.message);
          }
        }
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Directory not found: ${dir}`);
    } else {
      console.error(err);
    }
  }
}

async function main() {
  console.log(`Starting image optimization in ${publicImagesDir}`);
  await processDirectory(publicImagesDir);
  console.log('Finished image optimization.');
}

main().catch(console.error);
