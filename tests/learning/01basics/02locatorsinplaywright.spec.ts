import { test, expect } from '@playwright/test';

const url = 'https://gmstest.issi-software.com/pages/public';

test('Different Types of Locators in Playwright', async ({ page }) => {

  await test.step('getByRole Locator', async () => {
    // Navigate
    await page.goto(url);

    // click link
    await page.getByRole('link', { name: 'Organization Portal Login' }).click();
  });

});
