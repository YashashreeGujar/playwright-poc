const { test, expect } = require('@playwright/test');
const { monitoringUrls } = require('../support/monitoringUrls');

test.describe('Monitoring Pages', () => {
  test('All Levels', async ({ page }) => {
    await page.goto(monitoringUrls.allLevels);
    await expect(page.locator('h1')).toHaveText(/All levels/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('All Subjects', async ({ page }) => {
    await page.goto(monitoringUrls.allSubjects);
    await expect(page.locator('h1')).toHaveText(/All subjects/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Homepage', async ({ page }) => {
    await page.goto(monitoringUrls.homepage);
    await expect(page.getByTestId('test-dimensional-image-collection')).toBeVisible();
  });

  test('Learn and Revise', async ({ page }) => {
    await page.goto(monitoringUrls.learnAndRevise);
    await expect(page.locator('h1')).toHaveText(/Learn & revise/i);
  });

  test('Careers', async ({ page }) => {
    await page.goto(monitoringUrls.careers);
    await expect(page.locator('h1')).toHaveText(/Careers/i);
    await expect(page.locator('[class*=ChildrenContainer]')).toBeVisible();
  });

  test('Collection', async ({ page }) => {
    await page.goto(monitoringUrls.collection);
    await expect(page.locator('h1')).toContainText(/pprenticeships/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Levels', async ({ page }) => {
    await page.goto(monitoringUrls.levels);
    await expect(page.locator('h1')).toContainText(/GCSE/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Exam Boards', async ({ page }) => {
    await page.goto(monitoringUrls.examBoards);
    await expect(page.locator('h1')).toContainText(/English Literature/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Exam Specs', async ({ page }) => {
    await page.goto(monitoringUrls.examSpecs);
    await expect(page.locator('h1')).toContainText(/English Literature/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Field of Study', async ({ page }) => {
    await page.goto(monitoringUrls.fieldOfStudy);
    await expect(page.locator('h1')).toContainText(/Maths/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('My Bitesize (signed out)', async ({ page }) => {
    await page.goto(monitoringUrls.myBitesize);
    await expect(page.locator('h1')).toContainText(/My Bitesize/i);
    await expect(page.getByTestId('main-content')).toBeVisible(); 
  });

  test('Primary', async ({ page }) => {
    await page.goto(monitoringUrls.primary);
    await expect(page.locator('h1')).toContainText(/Primary/i);
    await expect(page.getByTestId('main-content')).toBeVisible(); 
  });

  test('Secondary', async ({ page }) => {
    await page.goto(monitoringUrls.secondary);
    await expect(page.locator('h1')).toContainText(/Secondary/i);
    await expect(page.getByTestId('main-content')).toBeVisible(); 
  });  

  test('Support', async ({ page }) => {
    await page.goto(monitoringUrls.support);
    await expect(page.locator('h1')).toContainText(/Study support/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Tags', async ({ page }) => {
    await page.goto(monitoringUrls.tags);
    await expect(page.locator('h1')).toContainText(/Skills and qualities/i);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Topics', async ({ page }) => {
    await page.goto(monitoringUrls.topics);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByTestId('main-content')).toBeVisible();
  });

  test('Teachers', async ({ page }) => {
    await page.goto(monitoringUrls.teachers);
    await expect(page.getByTestId('main-content')).toBeVisible();
  });
});
