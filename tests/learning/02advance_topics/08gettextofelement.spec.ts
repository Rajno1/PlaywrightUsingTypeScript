
/**
 *  we get text from web element by using methods like 
 *  textContent() & innerText() methods
 */


import { test , expect } from '@playwright/test'


test('multiple browsers/tabs in playwright', async ({ page,browser }) => {


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

        // get text from Search Criteria

        const searchHeading = await page.locator('[id="legendtext-0"]').innerText();
        console.log('the text is : ' + searchHeading)

        expect(searchHeading).toBe('Search Criteria');
    })
