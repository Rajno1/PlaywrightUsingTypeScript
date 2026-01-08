/**
 *  we can do the parallel execusion using 
 * - through config file (its golbal configuration applicable for all tests )
 * - through test file ()
 * - command prompt
 *  through command we can use : npx playwright test {file name} --worker 2 
 * 
 * 
 * if we have parameter 'fullyParalle' set to 'true' in playwright.config.ts file playwright will 
 * run tests in parallel and we can sepecify the number of workers that we want .
 * 
 * But if fullyParalle is false , by default no of workers is 1  and test will run in serial execusion
 * 
 * 
 * we have another concept called 'workers'
 * 
 * In parallel execusoin ONLY in parallel execusion for every process (test) it will assign one worker
 * if you are running 5 different test 5 differnt workers will be allowted to that 5 tests
 * 
 *  you have 6 tests and in parallel mode you haven't specified workers , then it will take 
 * the workers by default based on your tests , for 6 tests 6 workers , for 8 tests 8 workers 
 * 
 * when you run tests in serial mode one worker is enough to run all tests because tests will
 * execute one after another 
 * 
 * only in paralle mode we can set workers 5 test with 3 workers also possible 
 *  
 */



// in test lever configuraiton 

test.describe.configure({mode:'serial'});
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