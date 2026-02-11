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

test.describe('Routing validation', () => {
  for (const route of routes) {
    test(`route ${route} returns 200 and has one h1`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);

      const headings = page.locator('h1');
      await expect(headings).toHaveCount(1);
    });
  }

  test('navigation links route to correct pages and active state updates', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const links = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Trading', path: '/trading' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Compliance', path: '/compliance' },
      { name: 'Contact', path: '/contact' }
    ];

    const desktopNav = page.getByTestId('desktop-nav');

    for (const link of links) {
      await desktopNav.getByRole('link', { name: link.name }).click();
      await page.waitForURL(new RegExp(`${link.path}$`));
      await expect(desktopNav.getByRole('link', { name: link.name })).toHaveClass(/active/);
    }
  });

  test('no console errors or 404s during navigation', async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    const notFoundResponses: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', (error) => {
      pageErrors.push(error.message);
    });

    page.on('response', (response) => {
      if (response.status() === 404) {
        notFoundResponses.push(response.url());
      }
    });

    for (const route of routes) {
      await page.goto(route, { waitUntil: 'networkidle' });
    }

    expect(consoleErrors, `Console errors: ${consoleErrors.join(', ')}`).toHaveLength(0);
    expect(pageErrors, `Page errors: ${pageErrors.join(', ')}`).toHaveLength(0);
    expect(notFoundResponses, `404 responses: ${notFoundResponses.join(', ')}`).toHaveLength(0);
  });
});
