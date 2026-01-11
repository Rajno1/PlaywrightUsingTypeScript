/* 
Playwright recommands inbuilt supporters like 
1. getByRole()
2. getByLabel();
3. getByPlaceholder();
4. getByAltText();
5. getByText();
6. getByTitle();
7. getByTextId();


    CSS- Cascading Style sheet Locator type
    2 types of CSS locators:
    1. Absolute
    2. Relative 

    Differnt ways to create Relative CSS locator
  tag with id                            => tag#value of id
  tag with class attribute               => tag.class value
  tag with any other attribute           => tag[attribute='value']
  tag with class and attribute           => tag.classvalue[attribute='value']
  {tag is always optional i.e #id, .calssvalue , [attribute=value] also will work}

  'in class value if you have any sapce in b/w you can consider the value before the space'

  page.locator()- locator method wont return any promise because it only identifies the element.

  Different way of CSS locators
  1. Absolute CSS locators: the complete css locator from the root.
  html>head>title =>  '>' represents the navigation 
  in CSS only top to botton navigation is possible NOT botton to top

[class^='value'] => here '^' represents 'star with'
[class$='value'] => here '$' represents 'End with'
[class*='value'] => here '*' represents 'contains'
tag[id='value']:not([class='value']) => will identify element if the calss not match
̀   */





import { test, expect } from '@playwright/test';

const url = 'https://gmstest.issi-software.com/pages/public';

test('Different Types of Locators in Playwright', async ({ page }) => {

  await test.step('getByRole Locator', async () => {
    // Navigate
    await page.goto(url);

    // click link
    await page.getByRole('link', { name: 'Organization Portal Login' }).click();
  });


  

});
