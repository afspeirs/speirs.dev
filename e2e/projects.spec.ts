import { expect, test } from '@playwright/test';

test.describe('Projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should display a list of projects', async ({ page }) => {
    await expect(page.locator('ul[role="list"] li')).not.toHaveCount(0);
  });

  test('should navigate to a project page when a project is clicked', async ({ page }) => {
    await page.locator('ul[role="list"] li a').first().click();
    await expect(page).toHaveURL(/\/projects\//);
    await expect(page.getByRole('heading', { level: 2 })).not.toBeEmpty();
  });
});
