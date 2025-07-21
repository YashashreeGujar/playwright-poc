const { test, expect } = require('@playwright/test');
const loadCreds = require('../utils/loadCreds.js');
const loginWithUI = require('../utils/login.js');

const creds = loadCreds();

const locator = {
  levelZid: {
    gcse: 'z98jmp3',
  },
};

test.beforeEach(async ({ page }) => {
  await loginWithUI(page, creds.USER_EMAIL, creds.USER_PASSWORD);
});


test.describe('Bitesize Primary - Under 13 Login Flow', () => {
  test('As an under-13 user, I can navigate to KS2 from Primary landing page', async ({ page }) => {
    await page.goto('https://www.bbc.co.uk/bitesize');
    await page.waitForTimeout(1000); // for analytics tracking

    await page.waitForSelector('[data-testid="test-dimensional-image-collection"]', { timeout: 10000 });
    const primaryCard = page.locator('[data-testid="test-dimensional-image-collection"] >> text=Primary');
    await expect(primaryCard).toBeVisible();
    await primaryCard.click();

    // Verify Primary landing page
    await expect(page).toHaveURL(/\/primary/);
    await expect(page.locator('h1')).toHaveText('Primary Levels');
    await expect(page.locator('[class*=Summary]')).toHaveText('Ages 3 to 11');

    const buttonsWrapper = page.locator('[class*=ButtonsWrapper]');
    await expect(buttonsWrapper).toHaveCount(4);

    const englandLink = page.locator('[class*=CallToActionLink]', { hasText: 'England' });
    await expect(englandLink).toBeVisible();

    // Click KS2 level link
    const groupWrapper = page.locator('[class*=GroupWrapper]').first();
    await expect(groupWrapper).toBeVisible();

    await page.locator('[class*=HeadingLink]', { hasText: 'KS2' }).click();

    // Verify KS2 landing page
    await expect(page).toHaveURL(/\/levels\/zbr9wmn/);
    await expect(page.getByRole('heading', { name: 'All KS2 subjects' })).toBeVisible();
    await expect(page.locator('#main-heading')).toHaveText('KS2');
  });

  test('As a Secondary student who studies Biology - AQA, English Language and Geography I can select my subjects and add them to My Bitesize', async ({ page }) => {
    await page.goto(`https://www.bbc.co.uk/bitesize/levels/${locator.levelZid.gcse}`);

    await expect(page.locator('h1')).toHaveText(/GCSE/i);
    await expect(page.locator('h2', { hasText: 'Find' })).toBeVisible();
    await expect(page.locator('[class*=StyledSubTitle]', { hasText: 'View' })).toBeVisible();
    await expect(page.locator('[class*=TextWrapper]', { hasText: 'My Bitesize' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Go to My Bitesize/i })
    ).toHaveAttribute('href', /\/my/);
    
    await expect(page.locator('h2', { hasText: 'All GCSE subjects' })).toBeVisible();

    const artLinks = page.getByRole('link', { name: /Art and Design/i });
await expect(artLinks.first()).toBeVisible({ timeout: 10000 });
await artLinks.first().click();



    // Click AQA exam board link
    await page.locator("[class*=CallToActionLink]", { hasText: 'AQA' }).click();
    await expect(page).toHaveURL(/\/examspecs\/zjymp9q/);

    await page.reload();

    // Intercept follow POST request
    const [postRequest] = await Promise.all([
      page.waitForRequest(request => request.method() === 'POST' && request.url().includes('/my/follows')),
      page.locator('[data-testid=header-wrapper] [data-testid=uasButtonText]', { hasText: 'Add subject to My Bitesize' }).click(),
    ]);

    expect(postRequest).toBeTruthy();

    await expect(page.locator('[data-testid=header-wrapper] [data-testid=uasButtonText]', { hasText: 'Added' })).toBeVisible();

    // Click "My Bitesize"
    await page.locator("[class*=LinkTextContainer]", { hasText: 'My Bitesize' }).click();

    // Confirm Art subject appears
    await expect(page.getByRole('link', { name: /Art and Design - AQA/i })).toBeVisible();

  });
});
