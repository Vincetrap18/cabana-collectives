import { test, expect } from '@playwright/test';

test.describe('Design system validation', () => {
  test('root CSS variables exist', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const values = await page.evaluate(() => {
      const style = getComputedStyle(document.documentElement);
      return {
        primary: style.getPropertyValue('--primary').trim(),
        accent: style.getPropertyValue('--accent').trim(),
        bg: style.getPropertyValue('--bg').trim(),
        surface: style.getPropertyValue('--surface').trim()
      };
    });

    expect(values.primary).not.toBe('');
    expect(values.accent).not.toBe('');
    expect(values.bg).not.toBe('');
    expect(values.surface).not.toBe('');
  });

  test('primary CTA uses primary or accent color', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const colors = await page.evaluate(() => {
      const resolveVar = (varName: string) => {
        const probe = document.createElement('span');
        probe.style.background = `var(${varName})`;
        document.body.appendChild(probe);
        const value = getComputedStyle(probe).backgroundColor;
        probe.remove();
        return value;
      };

      const button = document.querySelector('.btn-primary') as HTMLElement | null;
      const buttonColor = button ? getComputedStyle(button).backgroundColor : '';
      return {
        buttonColor,
        primaryColor: resolveVar('--primary'),
        accentColor: resolveVar('--accent')
      };
    });

    expect(colors.buttonColor).not.toBe('');
    const normalized = (value: string) => value.replace(/\s+/g, '');
    const colorMatch = [colors.primaryColor, colors.accentColor]
      .map(normalized)
      .includes(normalized(colors.buttonColor));
    expect(colorMatch).toBe(true);
  });

  test('body and heading fonts are applied', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const fonts = await page.evaluate(() => {
      const bodyFont = getComputedStyle(document.body).fontFamily;
      const heading = document.querySelector('h1');
      const headingFont = heading ? getComputedStyle(heading).fontFamily : '';
      return { bodyFont, headingFont };
    });

    const bodyFont = fonts.bodyFont.toLowerCase();
    const headingFont = fonts.headingFont.toLowerCase();

    expect(bodyFont).toMatch(/source\\s?sans|__source_sans_3/);
    expect(headingFont).toMatch(/montserrat|__montserrat/);
  });
});
