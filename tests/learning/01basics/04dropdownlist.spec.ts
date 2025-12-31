// immport playwright modules

import { test, expect } from '@playwright/test'

// write test case

test('Handling Dropdown list ', async ({ page }) => {

    await test.step('Launch Facebook Page', async () => {
        // Navigate to the Facebook URL
        await page.goto('https://www.facebook.com/');
        await console.log('Launched Facebook URL successfully');
    })

    // take screen shot after launching the Face book page
    await test.step('Take screen shot afer launching facebook', async () => {
        await page.screenshot({ path: './screenshots/facebook/FacebookloginPage.png' });
    })

    // verfiy Create new account button visibility 
    await test.step('Verfiy visibility of Create new account button', async () => {
        await expect(page.getByText('Create new account')).toBeVisible();
        await console.log('Create new account button is visible');
    })

    // take the screenshot of Create new account  button
    await test.step('Screenshot of Create new account button', async () => {
        await page.getByRole('button', { name: 'Create new account' }).screenshot({ path: './screenshots/facebook/createbutton.png' });
    })

    // click on Create new account button 
    await test.step('', async () => {
        await page.getByText('Create new account').click();
        await console.log('clicked on Create new account button')
    })

    // Verify page after navigation
    await test.step('Verfiy page after navigation', async () => {
        await expect(page.getByText('Create a new account')).toBeVisible();
        await console.log('verfieid Create new account text after navigation')
    })

    // take the screen shot of 'Create a new account' text
    await test.step('take screenshot afternavigation', async () => {
        await page.getByText('Create a new account').screenshot({ path: './screenshots/facebook/textimage.png' })
        await console.log('took Create new account text screenshot')
    })
    
    await test.step('image before selecting value',async()=>{
        await page.screenshot({path:'./screenshots/facebook/pagebeforeselect.png'})
        await console.log('took scereenshot before selecting the value')
    })
    // select month by value 
    await test.step('select month by value', async () => {
        await page.getByLabel('Month').selectOption('7');
    })

    await test.step('image after selecting value',async()=>{
        await page.screenshot({path:'./screenshots/facebook/pageafterselect.png'})
        await console.log('took scereenshot after selecting the value')
    })

     await test.step('image before selecting value',async()=>{
        await page.screenshot({path:'./screenshots/facebook/pagebeforeselectVisibleText.png'})
        await console.log('took scereenshot before selecting the value by visible text')
    })

    // select month by visible text
await test.step('select month by visible text', async () => {
        await page.getByLabel('Month').selectOption('Oct');
         await console.log('selected month by visbile text')
    })

await test.step('image after selecting value',async()=>{
        await page.screenshot({path:'./screenshots/facebook/pageafterselectVisbileText.png'})
         await console.log('took scereenshot after selecting the value by visible text')
    })


    // validate all options from drop down
    await test.step('vadlidate all options from dropdown', async()=>{
        await expect(page.locator('#month > option')).toHaveText([
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]);
  console.log('We have all months in the drop down');

    })
})