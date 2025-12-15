/**
 *  how to re run or retry  the test on test failure 
 * 
 *  we can give the retry execusion option from playwright.config.ts file 
 *  
 *  retries: process.env.CI ? 2 : 0,  Here the first '2' indicate if test fails in CI CD it will retry for 2 times 
 * if we enter 1 in place of 0 it will run locally if test fails 
 *  
 *
 * 
 */