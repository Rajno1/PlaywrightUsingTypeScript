
import { test , expect } from '@playwright/test'
import path from 'path';

test('ISSI GMS login',async({page}) => {

    await test.step('launch ISSI GMS URL',async()=>{
        await page.goto('https://issigmsdev.issi-software.com/pages/public');
        await expect(page.locator('section')).toBeVisible;
        await expect(page.locator( 'section')).toContainText('Grants Management System');
        
        await test.step('Element Screenshot', async()=>{
        await page.locator('section').screenshot({path:'./screenshots/elementimage.png'})
        })

         await test.step('Current page Screenshot', async()=>{
        await page.screenshot({path:'./screenshots/pageimage.png'})
        })
        
        await test.step('Full page Screenshot', async()=>{
        await page.screenshot({path:'./screenshots/fullpageimage.png',fullPage:true})
        })
    })
})