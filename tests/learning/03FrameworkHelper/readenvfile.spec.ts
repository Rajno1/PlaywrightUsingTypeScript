

/** 
 *  Reading data from .env file 
 *  Point 1: Make sure to create '.env' file in project level and add values in the form of Key values
 *  Point 2: Make sure to un comment the 'dotenv' import code lines in 'playwright.config.ts' files 
 *  Point 3: run the ' npm install dotenv --save' command from terminal
 */


import { test, expect } from '@playwright/test'

test('Data Driven in playwright', async ({ page }) => {

    await test.step('Reading data from env file', async () => {
        await page.goto(`${process.env.PG_GMS_URL}`);
        // Click on staff URL

        await page.getByRole('link', { name: "Internal - Prince George's County Council Login" }).click();

        // enter username
        await page.getByLabel('Username').fill(`${process.env.STAFF_USERNAME}`);

        // enter password
        await page.getByLabel('Password').fill(`${process.env.STAFF_PASSWORD}`);

        // click on Login
        await page.locator('[id="btn-login"]').click();
    })
}) 