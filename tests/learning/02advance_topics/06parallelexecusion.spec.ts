/**
 *  We can configure the paralle execusion using 
 *  
 * - Through config file (its golbal configuration applicable for all tests )
 * - Through test file ( test.describe.config('mode: 'parallel'')
 * - At browser specific 
 * - Through command prompt at run time : npx playwright test {file name} --worker 2 
 * 
 * Through config file: 
 * 
 * => In 'Playwright.config.ts' file if we have 'fullyParalle: true' by default playwright will 
 * run tests in parallel and we can sepecify the number of workers that we want .
 * 
 * => if 'fullyParallel : false' , Playwright will run test in serial execusion 
 * by default no of workers will be 1 
 *  
 * Workers concept: 1 worker = 1 browser refernce ( NOT a Browser)
 * 
 * What is worker ?
 * A worker is a Node.js process, Each worker runs tests in isolation(each test executes independently)
 * launches its own browser 
 * 
 * In paralle execusion for ever process (test) one wroker will be assign
 * if you are running 5 different test 5 differnt workers will be allowted to that 5 tests
 * the workers by default based on your tests , for 6 tests 6 workers , for 8 tests 8 workers 
 * 
 * NOTE: you have 'fullyParalle:true' , workers:3 and you have only one test 
 * now how many workders will assign ? as test is one 1 worker will assign.
 * 
 * 
 * 
 * when you run tests in serial mode one worker is enough to run all tests because tests will
 * execute one after another 
 * 
 * only in paralle mode we can set workers 5 test with 3 workers also possible 
 *  
 * if we configure execustion in test lever or at run time it will over ride the 
 * configuration set in 'playwright.config.ts' file
 * 
 * Maximum number of workers:
 * in parallel execusion let we have 5 test max use can set workder upto 5 
 * if you set 6 it will take only 5 (because in this case Max no of test are only 5 )
 * 
 * 
 * When workers is set to undefined, Playwright automatically decides the worker count based on CPU cores.
 */



// in test lever configuraiton 

//test.describe.configure({mode:'serial'});
// test.describe.configure({mode:'parallel'});


import {test} from '@playwright/test';

test.describe('group 1',() => {

    test('Test 1', async ()=>{
        console.log(' This is test one')
    })
     test('Test 2', async ()=>{
        console.log(' This is test two')
    })
     test('Test 3', async ()=>{
        console.log(' This is test three')
    })
     test('Test 4', async ()=>{
        console.log(' This is test four')
    })
     test('Test 5', async ()=>{
        console.log(' This is test five')
    })

})