
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
     await expect.soft(page).toHaveURL('https://www.youtube.com/results?search=Playwright+by+testers+talk');

     //Very the title
     await expect(page).toHaveTitle('(497) Playwright by testers talk - YouTube');

     



})