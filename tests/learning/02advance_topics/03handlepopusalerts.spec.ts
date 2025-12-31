/**
 *  To handle alerts we need to use 
 * 'page.once('event','listner') which accept two arguments to capture the alert
 */
import { test, expect } from '@playwright/test'

const url = 'https://www.selenium.dev/documentation/webdriver/interactions/alerts/';

test('alerts and pop ups', async ({ page }) => {

    /**
     * By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
     * However, you can register a dialog handler before the action that triggers 
     */

    await test.step('Handling alert', async () => {

        await page.goto(url);

        page.once('dialog', dialog => {
            dialog.accept();
            console.log(`Alert message is : ${dialog.message()}`);
            console.log(`Dialog type is : ${dialog.type()}`);
        })

        await page.getByText('See an example alert', { exact: true }).click();

    })


    await test.step('Handling pop up', async () => {

        await page.goto(url);

        page.once('dialog', dialog => {
            dialog.accept();
           // dialog.dismiss();
            console.log(`pop up message is : ${dialog.message()}`);
            console.log(`Dialog type is : ${dialog.type()}`);
        })

        await page.getByText('See a sample confirm', { exact: true }).click();

    })


    await test.step('Handling prompt pop up', async () => {

        await page.goto(url);

        page.once('dialog', async(dialog) => {

            await dialog.accept('welcome');
            
            console.log(`prompt pop up message is : ${dialog.message()}`);
            console.log(`Dialog type is : ${dialog.type()}`);
            
        })

        await page.getByText('See a sample prompt', { exact: true }).click();

    })
})