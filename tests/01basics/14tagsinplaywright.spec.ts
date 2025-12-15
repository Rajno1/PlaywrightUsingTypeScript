import { test, expect } from '@playwright/test'

/**
 * after the testcase / test title we can create an object in the form of {tag : ['@someTesting']} tag names a array
 * 
 *  IMP how to run the test using tags 
 *   open terminal and use the command : npx playwright test -- grep '@smokeTest'
 *      
 */


    test('test one',{tag:['@smokeTest']}, async ({page }) => {
        console.log('First test script')
    })

    test('test two', {tag : ['@smokeTest, @RegressionTest']}, async ({ page }) => {
        console.log('Second test script')
    })


    test('test third',{tag:['@RegressionTest']}, async ({ page }) => {
        console.log('third test script')
    })





