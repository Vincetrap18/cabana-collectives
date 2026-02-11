import { test, expect } from '@playwright/test';

const imagePaths = [
  '/images/hero.png',
  '/images/global-trade.png',
  '/images/team.png',
  '/images/strategic-growth.png',
  '/images/sustainability.png',
  '/images/collage.png',
  '/images/cabana-brand-coast.png'
];

const pages = [
  { path: '/', images: ['/images/hero.png', '/images/global-trade.png'] },
  { path: '/about', images: ['/images/team.png'] },
  { path: '/services', images: ['/images/strategic-growth.png', '/images/global-trade.png', '/images/sustainability.png'] },
  { path: '/trading', images: ['/images/global-trade.png', '/images/strategic-growth.png'] },
  { path: '/sustainability', images: ['/images/sustainability.png'] },
  { path: '/compliance', images: ['/images/collage.png'] },
  { path: '/contact', images: ['/images/cabana-brand-coast.png'] }
];

const srcMatches = (srcs: string[], imagePath: string) => {
  const encoded = encodeURIComponent(imagePath);
  return srcs.some((src) => src.includes(imagePath) || src.includes(encoded));
};

test.describe('Image validation', () => {
  test('image assets are served', async ({ request }) => {
    for (const imagePath of imagePaths) {
      const response = await request.get(imagePath);
      expect(response.status(), `${imagePath} should return 200`).toBe(200);
    }
  });

  for (const pageEntry of pages) {
    test(`page ${pageEntry.path} renders expected images`, async ({ page }) => {
      await page.goto(pageEntry.path, { waitUntil: 'domcontentloaded' });

      const srcs = await page.locator('img').evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute('src') || '')
      );

      for (const imagePath of pageEntry.images) {
        expect(srcMatches(srcs, imagePath), `${imagePath} should appear on ${pageEntry.path}`).toBe(true);
      }

      expect(srcs.some((src) => src.includes('placeholder'))).toBe(false);
    });
  }
});
