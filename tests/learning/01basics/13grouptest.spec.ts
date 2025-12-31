import { test, expect } from '@playwright/test'

/**
 * with the help of describe() we can group the tests
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


