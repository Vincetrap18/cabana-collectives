const { test, expect } = require('@playwright/test');

test('home hero renders with headline and CTA', async ({ page }) => {
  await page.goto('/');

  const heroHeading = page.getByRole('heading', { level: 1 });
  await expect(heroHeading).toContainText('Cabana Collectives');
  await expect(page.getByTestId('hero-cta')).toBeVisible();
});

test('home page shows operating model steps', async ({ page }) => {
  await page.goto('/');
  const steps = page.getByTestId('operating-steps').locator('li');
  await expect(steps).toHaveCount(4);
});

