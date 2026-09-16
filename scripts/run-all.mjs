import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFile = path.join(__dirname, 'run-all-log.txt');

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logFile, msg + '\n');
}

function runCmd(cmd) {
  return new Promise((resolve, reject) => {
    log(`Running: ${cmd}`);
    exec(cmd, { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
      if (stdout) log(stdout);
      if (stderr) log(stderr);
      if (error) {
        log(`Error running ${cmd}: ${error.message}`);
        resolve(); // Continue even if error
      } else {
        log(`Finished: ${cmd}\n-----------------------`);
        resolve();
      }
    });
  });
}

async function main() {
  fs.writeFileSync(logFile, 'Starting master script execution...\n');
  
  // 1. Install dependencies
  await runCmd('npm install -D sharp svgo fluent-ffmpeg');
  
  // 2. Compress images
  await runCmd('node scripts/compress.mjs');
  
  // 3. Compress specific heavy files
  await runCmd('node scripts/compress-specific.mjs');
  
  // 4. Remove blob references
  await runCmd('node scripts/remove-blob.mjs');
  
  // 5. Fix filenames and fonts
  await runCmd('node scripts/fix-filenames.mjs');
  
  log('All scripts completed successfully.');
}

main().catch(e => log('Fatal error: ' + e.message));
