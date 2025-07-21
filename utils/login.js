// utils/login.js
const { expect } = require('@playwright/test');

async function loginWithUI(page, username, password) {
  // Navigate to login page
  await page.goto('https://account.bbc.com/signin');

  // Enter username
  const usernameInput = page.locator('#user-identifier-input');
  await expect(usernameInput).toBeVisible({ timeout: 5000 });
  await usernameInput.fill(username);

  // Click "Continue"
  const continueButton = page.locator('#submit-button');
  await continueButton.click();

  // Wait for password input
  const passwordInput = page.locator('#password-input');
  await expect(passwordInput).toBeVisible({ timeout: 5000 });
  await passwordInput.fill(password);

  // Click "Sign in"
  await page.locator('#submit-button').click();

  // Optional: wait for redirected page or cookie presence
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/bbc\.co\.uk/); // Or redirect target URL
}

module.exports = loginWithUI;
