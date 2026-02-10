const { test, expect } = require('@playwright/test');

test('navigation links route to correct pages', async ({ page }) => {
  await page.goto('/');

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
  }
});

test('mobile menu toggles correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/about');

  const toggle = page.getByTestId('nav-toggle');
  const mobileMenu = page.getByTestId('mobile-menu');

  await expect(mobileMenu).toBeHidden();
  await toggle.click();
  await expect(mobileMenu).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  await toggle.click();
  await expect(mobileMenu).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

