// optimize-images.mjs — one-time image compression for the-intentional-tea
// Overwrites images in place. Run once before push.
import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { resolve, extname, basename } from 'path';

const IMAGES_DIR = resolve('images');
const MAX_WIDTH   = 1920; // never wider than this

// Per-filename overrides for very small UI images that shouldn't be resized
const KEEP_SMALL = new Set(['favicon.png', 'Logo_Main.png']);

const files = readdirSync(IMAGES_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg', '.webp'].includes(extname(f).toLowerCase())
);

let totalBefore = 0, totalAfter = 0;

for (const file of files) {
  const srcPath = resolve(IMAGES_DIR, file);
  const tmpPath = srcPath + '.tmp';
  const ext = extname(file).toLowerCase();
  const before = statSync(srcPath).size;
  totalBefore += before;

  try {
    const img = sharp(srcPath);
    const meta = await img.metadata();

    // Resize if wider than MAX_WIDTH (and not a tiny logo)
    const shouldResize = !KEEP_SMALL.has(file) && meta.width > MAX_WIDTH;
    const pipeline = shouldResize ? img.resize(MAX_WIDTH, null, { withoutEnlargement: true }) : img;

    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
    } else {
      // PNG — use png compression
      await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmpPath);
    }

    const after = statSync(tmpPath).size;
    // Only keep the compressed version if it's actually smaller
    if (after < before) {
      renameSync(tmpPath, srcPath);
      const saving = ((before - after) / before * 100).toFixed(0);
      totalAfter += after;
      console.log(`  ✓ ${file.padEnd(48)} ${(before/1024).toFixed(0).padStart(6)}KB → ${(after/1024).toFixed(0).padStart(6)}KB  (-${saving}%)`);
    } else {
      // Discard tmp — original was already optimal
      renameSync(tmpPath, srcPath); // put it back (sharp overwrites metadata)
      totalAfter += before;
      console.log(`  = ${file.padEnd(48)} ${(before/1024).toFixed(0).padStart(6)}KB (already optimal)`);
    }
  } catch (e) {
    totalAfter += before;
    console.log(`  ! ${file} — skipped (${e.message.split('\n')[0]})`);
  }
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const pct = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(0);
console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (saved ${savedMB}MB / ${pct}%)`);
