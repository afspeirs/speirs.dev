import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the featured projects section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  });

  test('should display some featured projects', async ({ page }) => {
    await expect(page.locator('#projects ul li')).not.toHaveCount(0);
  });

  test('should navigate to the projects page when "View All Projects" is clicked', async ({ page }) => {
    await page.getByRole('link', { name: 'View All Projects' }).click();
    await expect(page).toHaveURL(/\/projects/);
  });
});
