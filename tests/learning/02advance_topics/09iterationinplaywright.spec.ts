/**
 * iteration in playwright
 * 
 *  - For of loop
 *  - For loop
 *  - For loop + nth method
 */

import { test , expect } from '@playwright/test'

test('iteration', async ({ page })=> {

     await page.goto('https://github.com/BakkappaN');
     const repositories = await page.$$('.repo');

     console.log(' ***** iteration using forof ***** ')

     for (const repositorie of repositories) {
        const text = await repositorie.textContent();
        console.log(`Repository text is : ${text}`);
     }

     console.log(' ***** iteration using for loop ***** ')
      for (let index = 0; index < repositories.length; index++) {
         const text = await repositories[index].textContent();
         console.log(`Repository text is : ${text}`);
      }

      console.log(' ***** forloop nth metod output ***** ')
      const repositorieslist = await page.locator('.repo');
      const count = await repositorieslist.count();
      for (let index = 0; index < count; index++) {
         const text = await repositorieslist.nth(index).textContent();
          console.log(`Repository text is : ${text}`);
      }

})

test('List of months in Facebook', async({page}) => {

   await page.goto('https://www.facebook.com/');
   await page.getByRole('button',{name : 'Create new account', exact:true }).click();
   
   const listOfMonths = await page.$$('#month > option');
   for (const monthlist of listOfMonths) {
      const month = await monthlist.textContent();
      console.log(` month is : ${month}`)
   }

})