/**
 * in thi sAnnotations spec file we see about
 *  - how to skip test
 *  - how to run only selected test
 * 
 *  Here for practice purpose i am using hooks as well
 */

// As a first step import playwright moduels

import { test , expect } from '@playwright/test'

test.beforeAll('Before all test', async()=>{
    console.log('Test script that should be execute before all tests....')
})

test.beforeEach('Before each test', async()=>{
    console.log('Test script that should be execute before each tests....')
})

test.afterEach('After each test', async() =>{
    console.log('Test script that should be execute after each tests....')
})

test.afterAll('After all test', async() =>{
    console.log('Test script that should be execute after all tests....')
})



test('test one', async({page}) =>{
    console.log('First test script')
})


test.skip('test two', async({page}) =>{  //  its will skip the second test execustion
    console.log('Second test script')
})


test.only('test third', async({page}) =>{ // it will run ony tird test 
    console.log('third test script')
})


