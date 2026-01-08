/**
 * in gerneal we will call it as annotations but those are 'test modifiers'
 * we have different types of test modifiers as follows:
 * skip()
 * only()
 * fixme()
 * fail()
 * slow()
 * 
 * in this Annotations spec file we see about
 *  - how to skip test
 *  - how to run only selected test
 * 
 * inste of test.only()=>
 *  we can also run the specific test by using the command 
 * ' npx playwright test -g "test tile/ tag name" ' or '' npx playwright test -grep "test tile / tag name" ' 
 * 
 *  it will rund the only test matches to that perfticiural title or tag 
 * 
 * what is the difference b/w -g & -grep ?
 * -g is just a short form (alias) of --grep. Both do the same thing.
 * --grep filters tests by name or tag at runtime.
 * --grep = globally search for a regular expression and print matching lines
 * 
 * at the time of code change we use 'test.only' on execusion we user -grep
 * 
 * instead of test.skip()=>
 * we can use the command ' npx playwright test --grep-invert {test title / tag name}
 * 
 * except this title or tag matching rest of the tests will get execute 
 *
 *  test.skip() -> to skip specific test by title or tag
 *  test.fixme() -> it means test is broken and needs fixing later , bug is open test will skip
 * 
 *  test.only() -> executes only the test specified
 *  test.fail() -> test is expected to fail if it fail mean the test got passed it wont skip execution
 *  test.slow() -> test is slow, give it more timeout, Timeout becomes 3× longer 
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


