import { test , expect } from '@playwright/test'

test.describe('Group',()=>{

     test('Group Test One', async({page})=>{
          console.log('This is my first test');
     })

     test('Group Test Two', async({page})=>{
          console.log('This is my second test');
     })

     test('Group  Third', async({page})=>{
          console.log('This is my third test');
     })

     test('Group Test Fourth', async({page})=>{
          console.log('This is my fourth test');
     })

     test('Group Test Fifth', async({page})=>{
          console.log('This is my fifth test');
     })



})