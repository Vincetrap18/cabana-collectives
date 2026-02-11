import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AxeBuilder } = require('@axe-core/playwright');

const routes = [
  '/',
  '/about',
  '/services',
  '/trading',
  '/sustainability',
  '/compliance',
  '/contact'
];

test.describe('SEO and accessibility', () => {
  for (const route of routes) {
    test(`metadata and alt attributes for ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' });

      const title = await page.title();
      expect(title).not.toBe('');

      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description).toBeTruthy();

      const altAttributes = await page.locator('img').evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute('alt'))
      );

      for (const alt of altAttributes) {
        expect(alt).not.toBeNull();
      }
    });
  }

  test('basic accessibility scan', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
