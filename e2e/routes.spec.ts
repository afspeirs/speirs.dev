import { expect, test } from '@playwright/test';

test.describe('Home', () => {
  test('should navigate to /', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe('Projects', () => {
  test('should navigate to /projects', async ({ page }) => {
    await page.goto('/projects');
    await expect(page).toHaveURL(/\/projects$/);
  });

  test('should navigate to /projects/speirs-dev', async ({ page }) => {
    await page.goto('/projects/speirs-dev');
    await expect(page).toHaveURL(/\/projects\/speirs-dev$/);
  });
});

test.describe('Tags', () => {
  test('should navigate to /tags', async ({ page }) => {
    await page.goto('/tags');
    await expect(page).toHaveURL(/\/tags$/);
  });

  test('should navigate to /tags/svelte', async ({ page }) => {
    await page.goto('/tags/svelte');
    await expect(page).toHaveURL(/\/tags\/svelte$/);
  });
});
