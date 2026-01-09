import { test, expect } from '@playwright/test';

const url = 'https://gmstest.issi-software.com/pages/public';

test('Different Types of Locators in Playwright', async ({ page }) => {

  await test.step('getByRole Locator', async () => {
    // Navigate
    await page.goto(url);

    // click link
    await page.getByRole('link', { name: 'Organization Portal Login' }).click();
  });


  /* 
    CSS- Cascading Style sheet Locator type
    2 types of CSS locators:
    1. Absolute
    2. Relative 

    Differnt ways to create CSS locator
  tag with id                            => tag#value of id
  tag with class attribute               => tag.class value
  tag with any other attribute           => tag[attribute='value']
  tag with class and attribute           => tag.classvalue[attribute='value']
  {tag is always optional i.e #id, .calssvalue , [attribute=value] also will work}


  page.locator()- locator method wont return any promise because it only identifies the element.

  
   */

});
