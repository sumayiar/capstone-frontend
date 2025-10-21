// Simple Puppeteer screenshot script
// Usage: node scripts/screenshot.js

const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.URL || 'http://localhost:5173/';
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // Desktop
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });

  // Mobile (iPhone 12 dimensions)
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

  await browser.close();
  console.log('Screenshots saved: screenshot-desktop.png, screenshot-mobile.png');
})();
