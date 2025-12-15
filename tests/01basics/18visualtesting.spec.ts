/**
 *  in visual testing in playwright we do 
 *  - Testing pagescreenshot
 *  - Testing element screenshot
 * 
 */

import { test , expect } from '@playwright/test'

test('Visual page comparision in playwright', async({page}) =>{

     page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('Githubloginpage.png');

    await page.locator('#login_field').fill('admin');

    await expect(page).toHaveScreenshot('Githubloginpage.png');
   
   
})


test('Visual element comparision in playwright', async({page}) =>{

     page.goto('https://github.com/login');

     const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');
    await expect(element).toHaveScreenshot('Githubloginelement.png');

    await page.locator('#login_field').fill('admin');
     await expect(element).toHaveScreenshot('Githubloginelement.png');
   
   
})