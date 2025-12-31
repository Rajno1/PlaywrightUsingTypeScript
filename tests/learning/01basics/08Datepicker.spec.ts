import { test, expect } from '@playwright/test'

test('Drag and Drop in Iframes', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('[class=demo-frame]');

    // Hardcoded Date
    //await iframe.locator('[id="datepicker"]').fill('12/12/2025');

    // selectin Dynamic Date

    //    await iframe.locator('[id="datepicker"]').click();
    //    await iframe.locator('.ui-datepicker-today').click();

    // how to selec previous days

    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text=29').click();


    // how to selec future days

    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text=29').click();


})