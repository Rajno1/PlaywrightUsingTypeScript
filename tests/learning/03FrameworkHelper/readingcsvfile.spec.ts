/*
    Prerequisites: make sure to install csv library using below command 
    ' npm install csv'
 */

import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// location of CSV file 
const csvFilePath = 'testData/data.csv';
// reading data from CSV file
const csvData = fs.readFileSync(csvFilePath, 'utf-8');
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