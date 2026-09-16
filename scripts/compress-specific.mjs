import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';
import sharp from 'sharp';
import { optimize } from 'svgo';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = util.promisify(exec);

const publicImagesDir = path.join(__dirname, '../public/images');

// Targets specifically requested
const targets = [
  'detailed_page/Vahdam/vahdam_vid_2.mp4',
  'detailed_page/Santhi/santhi_motion_2.mp4',
  'detailed_page/Santhi/santhi_motion.mp4',
  'detailed_page/Vahdam/vahdam_1.jpg',
  'detailed_page/Wingreens/wingreens.jpg',
  'floating_key.svg'
];

async function compressMP4(filePath) {
  const tempPath = filePath.replace('.mp4', '_compressed.mp4');
  console.log(`Compressing video: ${filePath}...`);
  try {
    // using crf 28 which gives good compression, resizing if very large
    await execAsync(`ffmpeg -i "${filePath}" -vcodec libx264 -crf 28 -preset fast "${tempPath}" -y`);
    await fs.copyFile(tempPath, filePath);
    await fs.unlink(tempPath);
    console.log(`✓ Compressed video: ${filePath}`);
  } catch (err) {
    console.error(`Failed to compress ${filePath}. Is ffmpeg installed?`, err.message);
  }
}

async function compressJPG(filePath) {
  console.log(`Compressing image: ${filePath}...`);
  const tempPath = filePath.replace('.jpg', '_compressed.webp');
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let processed = image;
    if (metadata.width > 1920) {
      processed = processed.resize({ width: 1920, withoutEnlargement: true });
    }
    
    // We convert to WebP for massive savings
    await processed.webp({ quality: 75 }).toFile(tempPath);
    
    // Replace the original with a heavily optimized JPG as fallback or just replace with the webp (and rename appropriately)
    const fallbackPath = filePath.replace('.jpg', '_compressed.jpg');
    await processed.jpeg({ quality: 70, progressive: true }).toFile(fallbackPath);
    
    await fs.copyFile(fallbackPath, filePath);
    await fs.unlink(fallbackPath);
    await fs.unlink(tempPath);
    console.log(`✓ Compressed image: ${filePath}`);
  } catch (err) {
    console.error(`Failed to compress ${filePath}:`, err.message);
  }
}

async function compressSVG(filePath) {
  console.log(`Compressing SVG: ${filePath}...`);
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const result = optimize(data, {
      path: filePath,
      multipass: true,
      plugins: [
        { name: 'preset-default' },
        { name: 'removeDimensions' }
      ]
    });
    
    if (result.data) {
      await fs.writeFile(filePath, result.data, 'utf8');
      console.log(`✓ Compressed SVG: ${filePath}`);
    } else {
      console.error(`Failed to compress SVG: ${result.error}`);
    }
  } catch (err) {
    console.error(`Failed to compress ${filePath}:`, err.message);
  }
}

async function main() {
  for (const relativePath of targets) {
    const fullPath = path.join(publicImagesDir, relativePath);
    try {
      await fs.access(fullPath);
      const ext = path.extname(fullPath).toLowerCase();
      
      if (ext === '.mp4') {
        await compressMP4(fullPath);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await compressJPG(fullPath);
      } else if (ext === '.svg') {
        await compressSVG(fullPath);
      }
    } catch (err) {
      console.log(`Could not find or process file: ${relativePath} (searched at ${fullPath})`);
    }
  }
}

main().catch(console.error);
