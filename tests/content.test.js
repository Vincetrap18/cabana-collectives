const { test, expect } = require('@playwright/test');

const pages = [
  { path: '/', heading: 'Cabana Collectives' },
  { path: '/about', heading: 'Global Advisory With Trade Execution Discipline' },
  { path: '/services', heading: 'Integrated Services Across Global Trade' },
  { path: '/trading', heading: 'Structured Trading Programs Built for Compliance' },
  { path: '/sustainability', heading: 'Future-Ready Supply Programs' },
  { path: '/compliance', heading: 'Governance That Protects Every Transaction' },
  { path: '/contact', heading: 'Start a Sourcing or Trade Conversation' }
];

test('each page loads with expected heading', async ({ page }) => {
  for (const entry of pages) {
    await page.goto(entry.path, { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { level: 1 })).toContainText(entry.heading);
  }
});

test('footer is consistent across pages', async ({ page }) => {
  for (const entry of pages) {
    await page.goto(entry.path, { waitUntil: 'domcontentloaded' });
    const footer = page.getByTestId('site-footer');
    await expect(footer).toContainText('Kenya, Serving Global Markets');
    await expect(footer).toContainText('2024 Cabana Collectives. All rights reserved.');
  }
});

test('contact form fields exist with labels', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'domcontentloaded' });
  await expect(page.getByLabel('Name')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Company')).toBeVisible();
  await expect(page.getByLabel('Engagement Type')).toBeVisible();
  await expect(page.getByLabel('Message')).toBeVisible();
});
