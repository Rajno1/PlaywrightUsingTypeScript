/*
this testFixture.ts file is a custom Playwright fixture , used to add global 
before and after logic also can share comon setup and teardown methods

A fixture is a reusable setup that Playwright gives to your test automatically. 
 */
import { test as base } from '@playwright/test'; 
/* 
we are renaming the 'test' as base
Why rename?
Because we want to extend it and create our own custom test
 */

 export const test = base.extend<{saveLogs:void}>({ // saveLogs is fixture name 

  saveLogs:[ // here we are defining the custom fixture (saveLogs) behaviour 

      async({},use)=>{ // '{}' - no dependency fixutre , use- a function to call palywright test

        console.log('before test -----')
        await use();
        console.log('after test -----')

      }, 
      { auto : true } // this means this fixture runs automatically NOT need to mention saveLogs in test files
  ] 

 });
 export{expect} from '@playwright/test';
