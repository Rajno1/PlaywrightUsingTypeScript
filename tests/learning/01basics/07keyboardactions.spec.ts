/**
 * in this Keyboard actions sepc file we are going to learn about
 * 1. Pressing Enter Key
 * 2. Press Tab Key
 */

import { test , expect } from '@playwright/test'

test('Keyboard Actions', async({page})=>{

    await test.step('',async()=>{
        await page.goto('https://google.com');
        // Presss Entery Key from Keyboard
        await page.getByLabel('Search', {exact: true}).click();
        await page.getByLabel('Search', {exact: true}).fill('Welcome to Playwright Testscript');
        await page.getByLabel('Search', {exact: true}).press('Enter');
    })

    await test.step('control+A using Keyboard', async()=>{
        await page.getByLabel('Search', {exact: true}).click();
        await page.keyboard.press('Meta+A');
        await page.keyboard.press('Delete')
    })

    await test.step('using Tab in Keyboard', async()=>{
        await page.getByLabel('Search', {exact: true}).click();
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter')
    })
})