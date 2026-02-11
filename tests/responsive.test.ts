import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/about',
  '/services',
  '/trading',
  '/sustainability',
  '/compliance',
  '/contact'
];

const viewports = [
  { width: 360, height: 800, label: 'mobile' },
  { width: 768, height: 900, label: 'tablet' },
  { width: 1024, height: 900, label: 'desktop' },
  { width: 1440, height: 900, label: 'wide' }
];

test.describe('Responsive validation', () => {
  for (const viewport of viewports) {
    test(`layout at ${viewport.label} (${viewport.width}px) has no horizontal scroll`, async ({ page }) => {
      await page.setViewportSize(viewport);

      for (const route of routes) {
        await page.goto(route, { waitUntil: 'domcontentloaded' });
        const overflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return doc.scrollWidth - doc.clientWidth;
        });
        expect(overflow).toBeLessThanOrEqual(1);
      }
    });
  }

  test('navigation collapses on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page.getByTestId('desktop-nav')).toBeHidden();
    await expect(page.getByTestId('nav-toggle')).toBeVisible();

    await page.setViewportSize({ width: 1024, height: 900 });
    await page.reload({ waitUntil: 'domcontentloaded' });

    await expect(page.getByTestId('desktop-nav')).toBeVisible();
    await expect(page.getByTestId('nav-toggle')).toBeHidden();
  });

  test('home hero section remains within viewport', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const hero = page.locator('section').first();
    const { width } = await hero.boundingBox();
    expect(width).toBeLessThanOrEqual(360);
  });
});
