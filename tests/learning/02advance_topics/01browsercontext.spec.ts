/**
 *  Here we will see 
 *   How to create multiple browser sessions
 *   How to create multiple tabs/pages
 *  we are adding additional 'browser' object in test to open multiple browsers
 *  creating a new independent browser context and a new page (tab) inside that context.
 * A browser context in Playwright is like a separate browser profile.
 */

import { test, expect } from '@playwright/test'

test('multiple browsers/tabs in playwright', async ({ page,browser }) => {

    await test.step('Navigate to staff login page', async () => {

        // Go to URL
        await page.goto('https://gmstest.issi-software.com/pages/public');

        // Click on staff URL

        await page.getByRole('link', { name: "Internal - Prince George's County Council Login" }).click();
    })

    await test.step('Login to the staff portal', async () => {

        // enter username
        await page.getByLabel('Username').fill('admin');

        // enter password
        await page.getByLabel('Password').fill('Issi@123');

        // click on Login
        await page.locator('[id="btn-login"]').click();
    })



    // Here we are creating a new independent browser context and a new page (tab) inside that context.
    // A browser context in Playwright is like a separate browser profile.

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();


    await test.step('Navigate to Organizaiton login page', async () => {

        // Go to URL
        await page2.goto('https://gmstest.issi-software.com/pages/public');

        // Click on staff URL

        await page2.getByRole('link', { name: 'Organization Portal Login ' }).click();
    })

    await test.step('Login to the Organization portal', async () => {

        // enter username
        await page2.getByLabel('Username').fill('admin');

        // enter password
        await page2.getByLabel('Password').fill('Issi@123');

        // click on Login
        await page2.locator('[id="btn-login"]').click();
    })



    
    // in already open browser profile we are creating a new tab 

    const newtab = await context2.newPage();

await test.step('Navigate to google', async () => {

        // Go to URL
        await newtab.goto('https://www.google.com');

        // Do Search

        await newtab.getByTitle('Search').fill('Playwright testing');
        // Hit keyboard Enter
        await newtab.getByTitle('Search').press('Enter');

       
    })



}) 