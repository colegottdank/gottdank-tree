// one-off: full-page screenshot of a live URL into img/sources/
// usage: node enrich/capture.js <url> <out.png>
const puppeteer = require('puppeteer');
(async () => {
  const [,, url, out] = process.argv;
  if (!url || !out) { console.error('usage: node capture.js <url> <out>'); process.exit(1); }
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 1600, deviceScaleFactor: 2 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36');
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  // dismiss common cookie/consent overlays
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log('saved', out);
})().catch(e => { console.error(e); process.exit(1); });
