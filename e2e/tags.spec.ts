import { expect, test } from '@playwright/test';

test.describe('Tags page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tags');
  });

  test('should display a list of tags', async ({ page }) => {
    await expect(page.locator('ul[role="list"] li')).not.toHaveCount(0);
  });

  test('should navigate to a tag page when a tag is clicked', async ({ page }) => {
    await page.locator('ul[role="list"] li a').first().click();
    await expect(page).toHaveURL(/\/tags\//);
    await expect(page.getByRole('heading', { level: 2 })).not.toBeEmpty();
  });
});
