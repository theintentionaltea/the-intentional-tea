import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = [
  { html: 'start-here-templates.html', pdf: 'start-here-templates.pdf' },
  { html: 'start-here-planner.html',   pdf: 'start-here-planner.pdf'   },
  { html: 'start-here-stickers.html',  pdf: 'start-here-stickers.pdf'  },
  { html: 'start-here-life-reset.html',pdf: 'start-here-life-reset.pdf'},
  { html: 'start-here-astrology.html', pdf: 'start-here-astrology.pdf' },
];

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({ width: 816, height: 1056, deviceScaleFactor: 1 });

for (const { html, pdf } of files) {
  const htmlPath = join(__dirname, html);
  if (!existsSync(htmlPath)) {
    console.log(`Skipping ${html} — file not found`);
    continue;
  }

  await page.goto(`file:///${htmlPath}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1800));

  await page.pdf({
    path: join(__dirname, pdf),
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log(`Generated: ${pdf}`);
}

await browser.close();
console.log('\nAll done. PDFs are in the deliverables/ folder.');
