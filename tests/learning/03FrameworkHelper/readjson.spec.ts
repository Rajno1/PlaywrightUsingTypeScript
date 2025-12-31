/**
 * IMP : Reading data from JSON file is Recommanded in Playwright because it has inbult supporting 
 * methods to read data from JSON file and NO NEED TO IMPORT THRID PARTY LIBRARIES.
 *  
 * 
 * 
 * Create json file 
 *  Read json file
 *  pass each set of test data to playwright
 * 
 *   if any file import issue add the below code into global.d.ts file
 * 
 *  declare module '*.json'{
 *      const value: any;
 *      export default value;
 *  }
 * 
 *  and include this 'global.d.ts' file into 'tsconfig.json.file'
 */

//  import playwright moduel 
import { test , expect } from '@playwright/test';
import fs from 'fs';
// fs is file system inbuilt module in node.js

// get JSON file path 
 const jsonFilePath = 'testData/data.json';
 const jsonData:any = JSON.parse(fs.readFileSync(jsonFilePath,'utf-8'));

for (const {username,password,email} of jsonData) {

    test(`reading json data for ${username}`,async()=>{
    
    console.log(`username is ${username}`)
    console.log(`password is ${password}`)
    console.log(`email is ${email}`)

    })
      
}
