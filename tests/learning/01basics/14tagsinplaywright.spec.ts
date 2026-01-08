
/**
 * after the testcase / test title we can create an object in the form of {tag : ['@someTesting']} tag names a array
 * 
 *  IMP how to run the test using tags 
 *   open terminal and use the command : npx playwright test -- grep '@smokeTest'
 * tag: '@smoke'          // single tag
 * tag: ['@smoke']        // multiple tags (array form)
 *      
 * 
 *  Can tags be added to test.describe()?
    YEs

    Why do we need tags when we already have describe?
    describe groups tests in code structure.Tags group tests at execution time.

 * Key takeaway
Hooks apply only to tests inside that describe
Tags in describe are inherited by all child tests

it means If you put a tag on a test.describe() block, 
every test inside that block automatically gets that tag

  => run only smoke test 
  npx playwright test --grep @smokeTest

  => run only regression test 
  npx playwright test --grep @regression

  => run test having both tags orde dependent
  npx playwright test --grep "@smokeTest.*@RegressionTest"


  => run test having both tags but tags order is not important 
  npx playwright test --grep "(?=.*@smokeTest)(?=.*@RegressionTest)"


. and * are regex operators, not separators:
. → any character
* → zero or more times
.* → anything in between

 */


    // test('test one',{tag:['@smokeTest']}, async ({page }) => {
    //     console.log('First test script')
    // })

    // test('test two', {tag : ['@smokeTest, @RegressionTest']}, async ({ page }) => {
    //     console.log('Second test script')
    // })̀

    // test('test third',{tag:['@RegressionTest']}, async ({ page }) => {
    //     console.log('third test script')
    // })


import { test } from '@playwright/test';

test('test one @smokeTest', async ({ page }) => {
  console.log('First test script');
});

test('test two @smokeTest @RegressionTest', async ({ page }) => {
  console.log('Second test script');
});

test('test third @RegressionTest', async ({ page }) => {
  console.log('Third test script');
});




