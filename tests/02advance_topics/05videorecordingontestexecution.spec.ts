/**
 * we can do the configation 
 */

import { test ,expect } from '@playwright/test'

test('staff login', async ({ page, browser }) => {


    // Go to URL
    await page.goto('https://gmstest.issi-software.com/pages/public');

    // Click on staff URL

    await page.getByRole('link', { name: "Internal - Prince George's County Council Login" }).click();

    // enter username
    await page.getByLabel('Username').fill('admin');

    // enter password
    await page.getByLabel('Password').fill('Issi@123');

    // click on Login
    await page.locator('[id="btn-login"]').click();

})

test('Organization login', async ({ page }) => {

    // Go to URL
    await page.goto('https://gmstest.issi-software.com/pages/public');

    // Click on staff URL

    await page.getByRole('link', { name: 'Organization Portal Login ' }).click();

    // enter username
    await page.getByLabel('Username').fill('admin');

    // enter password
    await page.getByLabel('Password').fill('Issi@123');

    // click on Login
    await page.locator('[id="btn-login"]').click();
})

test('individual login', async ({ page }) => {

    // Go to URL
    await page.goto('https://gmstest.issi-software.com/pages/public');

    // Click on staff URL

    await page.getByRole('link', { name: 'Individual Portal Login ' }).click();

    // enter username
    await page.getByLabel('Username').fill('admin');

    // enter password
    await page.getByLabel('Password').fill('Issi@123');

    // click on Login
    await page.locator('[id="btn-login"]').click();
})