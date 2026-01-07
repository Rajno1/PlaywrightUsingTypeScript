
/**
 * Here we have 2 Assertions
 * 
 * Assertions are used to compare the actual value and expected value
 *  1.Hard Assertion - when ever a test fail it wil stop the execusion immidiately
 *  2.Soft Assertion - it will execute the script event though the test fails and will give final report after the execusion.
 * 
 *  1) Hard Assertions
 *      1. Editable - toBeEditable()
 *      2. Visible - toBeVisible ()
 *      3. Enabled - toBeEnabled () 
 *      4. Empty - toBeEmpty ()
 * 
 *      5. URL - toHaveURL ()
 *      6. Title - toHaveTitle () 
 *      7. Text - toHaveText ()
 *      8. Count - toHaveCount ()
 *      9. Disabled - toBeDisabled ()
 */

import { test , expect } from '@playwright/test'

test ('Assertions in playwright', async({page})=> {

    await page.goto('https://www.youtube.com/');
    const seachElement = page.getByPlaceholder('Search',{exact:true}).first();
    
    //Editable
     await expect(seachElement).toBeEditable();
     console.log('Search element is editable')

     //Visible
     await expect(seachElement).toBeVisible();
     console.log('Search element is visible') 

     //Enabled or not
     await expect(seachElement).toBeEnabled();
     console.log('Search element is Enabled') 

     //is Empty or not
     await expect(seachElement).toBeEmpty();
     console.log('Search element is Empty') 


     // Has URL or not 
     await seachElement.click();
     await seachElement.fill('Playwright by testers talk');
     await seachElement.press('Enter');
     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+testers+talk');

     //Very the title
     await expect(page).toHaveTitle('(497) Playwright by testers talk - YouTube');

     



})