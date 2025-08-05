// Snapshot testing in Playwright is built-in and supports both visual and text/DOM snapshots, making it more powerful and reliable.
// In Cypress, snapshot testing requires third-party plugins which can be harder to maintain and configure.
// Playwright is better for snapshot testing due to its native support, cross-browser capability, and easier integration.
// Cypress is still great for general UI testing, but for snapshots, Playwright offers a more complete solution.
// More information - https://playwright.dev/docs/aria-snapshots#overview 

import { test, expect } from '@playwright/test';

test('Bitesize homepage snapshot testing', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/bitesize');

  // Wait for the main header element to be visible
  const header = page.locator('header');

  // Ensure header is visible before taking element-level snapshot
  await expect(header).toBeVisible();

  // 1️⃣ Full-page screenshot
  await expect(page).toHaveScreenshot('Bitesize-homepage.png', {
    fullPage: true,
  });

  // 2️⃣ Header element screenshot
  await expect(header).toHaveScreenshot('Bitesize-header.png');
});

