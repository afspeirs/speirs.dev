import { expect, test } from '@playwright/test';

test.describe('Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Header', () => {
    test('should display the header', async ({ page }) => {
      await expect(page.locator('header')).toBeVisible();
    });

    test('should display the logo', async ({ page }) => {
      await expect(page.locator('header a[aria-label="Home"]')).toBeVisible();
    });
  });

  test.describe('Footer', () => {
    test('should display the footer', async ({ page }) => {
      await expect(page.locator('footer')).toBeVisible();
    });

    test('should display the copyright notice', async ({ page }) => {
      const year = new Date().getFullYear();
      await expect(page.locator('footer')).toContainText(`© 2017-${year} Andrew Speirs`);
    });

    test('should display the theme toggle button', async ({ page }) => {
      await expect(page.locator('footer button')).toBeVisible();
    });

    test('should toggle the theme', async ({ page }) => {
      const html = page.locator('html');
      const initialTheme = await html.getAttribute('data-theme');
      await page.locator('footer button').click();
      await expect(html).not.toHaveAttribute('data-theme', initialTheme ?? '');
    });
  });
});
