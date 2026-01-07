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
// import file system module to read JSON file
import fs from 'fs';
// fs is file system inbuilt module in node.js

//  define the path of the JSON file
//  'testData/data.json' is the path of the JSON file
//  'testData' is the folder name and 'data.json' is the file name
 const jsonFilePath = 'testData/data.json';
//  read JSON file using fs module
//  fs.readFileSync() is used to read the file synchronously
//  'utf-8' is used to read the file in string format
//  JSON.parse() is used to convert string data into JSON object    
 const jsonData:any = JSON.parse(fs.readFileSync(jsonFilePath,'utf-8'));

for (const {username,password,email} of jsonData) {

    test(`reading json data for ${username}`,async()=>{
    
    console.log(`username is ${username}`)
    console.log(`password is ${password}`)
    console.log(`email is ${email}`)

    })
      
}
