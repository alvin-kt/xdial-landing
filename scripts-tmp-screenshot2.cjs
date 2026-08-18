const { chromium } = require('playwright');

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/how-it-works', name: 'how-it-works' },
  { path: '/security', name: 'security' },
  { path: '/support', name: 'support' },
  { path: '/book-a-demo', name: 'book-a-demo' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  for (const p of PAGES) {
    await page.goto(`http://localhost:5173${p.path}`, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: `/private/tmp/claude-501/-Users-admin-Documents-xdial-landing/3bfc96b8-8df4-4705-8d6f-57dc99e8960b/scratchpad/${p.name}.png`,
      fullPage: true,
    });
  }
  await browser.close();
})();
