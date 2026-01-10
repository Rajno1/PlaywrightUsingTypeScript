import { test , expect } from '@playwright/test'

test.describe('Group One',()=>{

     test('Test One', async({page})=>{
          console.log('This is my first test');
     })

     test('Test Two', async({page})=>{
          console.log('This is my second test');
     })

     test('Test Third', async({page})=>{
          console.log('This is my third test');
     })

     test('Test Fourth', async({page})=>{
          console.log('This is my fourth test');
     })

     test('Test Fifth', async({page})=>{
          console.log('This is my fifth test');
     })



})