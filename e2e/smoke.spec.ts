import { expect, test } from '@playwright/test';

/**
 * Guards against the suite silently running against some other app that happens
 * to hold port 5173 (see `playwright.config.ts` `webServer`).
 */
test.describe('Smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should be served by this site', async ({ page }) => {
    await expect(page).toHaveTitle(/AFSpeirs/);
  });

  test('should expose the build version marker', async ({ page }) => {
    const version = page.locator('meta[name="version"]');

    await expect(version).toHaveCount(1);
    await expect(version).toHaveAttribute('content', /.+/);
  });
});
