/**
 *  A a first point make sure to save each record with an extension of .spec.ts
 *  after that import playwright modules and continue with your tests
 */

// importing playwright modules i.e playwright test runners to write and validate the tests

import { test , expect } from '@playwright/test'

// import is a keyword 
// test - test is a function used to write and run your test case
// expect -is Playwright’s assertion library. Used to check if your test passes or fails.
// '@playwright/test' - is Playwright’s built-in test runner

/**
 * Create a test named ‘first test case’.
 * Inside it, run asynchronous steps using the browser page provided by Playwright
 */
test('ISSI GMS login',async({page}) => {

    await test.step('launch ISSI GMS URL',async()=>{
        await page.goto('https://issigmsdev.issi-software.com/pages/public');
        await expect(page.locator('section')).toBeVisible;
        await expect(page.locator( 'section')).toContainText('Grants Management System');
    })

    await test.step('Navigate to staff page', async()=>{
        await expect(page.getByRole('link',{name:'Login'})).toBeEnabled();
        await page.getByRole('link',{name:'Login'}).click();
    })

    await test.step('Login to staff porrtal',async()=>{
        await expect(page.getByRole('link',{name:'Staff Portal Login'})).toBeVisible();
        await page.getByRole('link',{name:'Staff Portal Login'}).click();
        await expect(page.getByText('Staff Portal Sign In')).toContainText('Staff Portal Sign In');
        await page.getByRole('textbox',{name:'Enter Username'}).fill('admin');
        await page.getByRole('textbox',{name:'Enter Password'}).fill('Issi@123');
        await page.getByRole('button',{name:'Submit'}).click();
        await page.screenshot({path:'./screenshots/loginscreenshot.png'});
    })
})

