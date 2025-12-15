/**
 *  in this spec file we will see about 
 *  - Test Timeout
 *  - Assertion Timeout
 *  - Action Timeout
 *  - All Test Execusion Timeout 
 * 
 *  to set global test time out in config.ts file we add ' timeout : 1 * 60 * 1000 ' so it will fails every after 1 min
 * 
 *  if we set timout configuration in local i.e inside the test case {test.setTimeout(1*60*1000)} it will override the global 
 *  configuration
 * 
 * 
 */

import { test, expect } from '@playwright/test'

test('timeouts in playwright', async ({ page }) => {

    await test.step('Navigate to staff login page', async () => {

        // Go to URL
        await page.goto('https://gmstest.issi-software.com/pages/public');

        // Click on staff URL

        await page.getByRole('link', { name : "Internal - Prince George's County Council Login"}).click();
    })

    await test.step('Login to the staff portal', async () => {

        // enter username
        await page.getByLabel('Username').fill('admin');

        // enter password
         await page.getByLabel('Password').fill('Issi@123');

         // click on Login
         await page.locator('[id="btn-login"]').click({timeout : 5000});
    })

})