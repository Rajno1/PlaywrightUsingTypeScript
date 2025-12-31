/**
 *  Prerequisite : Make sure to install xlsx library using below command
 *      npm install xlsx
 *
 */

import { test , expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

// File -> workbook -> sheet -> rows & columns

// get excel file path 
const excelFilePath = 'testData/data.xlsx';
const workbook = XLSX.readFile(excelFilePath);
const sheetNames = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetNames];

// converting sheet into json file 
const jsonData:any = XLSX.utils.sheet_to_json(sheet);

for (const {firstname,lastname,username,password} of jsonData) {
    
    test(`json data from excel for ${firstname}`,async()=>{

    console.log(`username is ${firstname}`)
    console.log(`lastname is ${lastname}`)
    console.log(`username is ${username}`)
    console.log(`password is ${password}`)
    
    })
   
}

// converting sheet into csv file 

const csvData = XLSX.utils.sheet_to_csv(sheet);
const records: any = parse(csvData, { columns: true, skip_empty_lines: true, bom: true });

//Fetching data from CSV file 
for (const record of records) {

    test(`csv data of ${record.firstname}`, async()=>{
    
    console.log(`firsname is ${record.firstname}`);
    console.log(`last is ${record.lastname}`);
    console.log(`username is ${record.username}`);
    console.log(`password is ${record.password}`);

    })
    
}