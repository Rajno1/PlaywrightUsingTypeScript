import { test, expect } from '@playwright/test'

/**
 * with the help of describe() we can group the tests
 * 
 *  is nested describe() block supportedin playwright ?
 * Yes
 * 
 * What happens if multiple describe blocks have same name?
 * Playwright treats them independently; execution is unaffected.
 * 
 * Can tags be added to test.describe()?
    YEs
 */


test.describe('Smoke test', () => {

    test('test one', async ({ page }) => {
        console.log('First test script')
    })

})


test.describe('Regression test', () => {

    test('test two', async ({ page }) => {
        console.log('Second test script')
    })

 
    test('test third', async ({ page }) => {
        console.log('third test script')
    })


})


