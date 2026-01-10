/* 
    What is Crossbrowsre testing ?
    👉 Running the same test cases on multiple browsers (Chromium, Firefox, and WebKit) 
    to ensure your application behaves consistently across different browsers.

    1st Approach :
    if you uncomment the 3 projects (chromium, firefox and webKit) from 'Playwright.config.ts'
    file your tests will run accross 3 projects.
    
    NOTE: if you want to see the three browsers are open in '--headed' mode, make sure you are using page fixure
    {page} in your test class 

    IMP: How can you run different test files on different browsers?
    By using Playwright projects with testMatch at the project level. 
    Each project can target specific test files and configure browserName independently.
    i.e add testMatch: /.*chromium\.spec\.ts/, to your Projects in config file and 
    if you save specfiel with file.chromium.spec.ts as you have chromium in file name 
    all those test will run in chrome.




 */

import {test, expect} from '@playwright/test';


        test('Sample Test',async({page})=>{
        console.log('Sample test for cross browser testing');
        })




// test('Sample Test',async({page})=>{
//     console.log('Sample test for cross browser testing');
// })

// test('Sample Two',async({})=>{
//     console.log('Sample test  two for cross browser testing');
// })

// test('Sample Three',async({})=>{
//     console.log('Sample test  three for cross browser testing');
// })