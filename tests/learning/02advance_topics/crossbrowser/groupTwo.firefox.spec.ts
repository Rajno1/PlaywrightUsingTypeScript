import { test , expect } from '@playwright/test'

test.describe('Group Two',()=>{

     test('Group Two Test One', async({page})=>{
          console.log('This is my first test');
     })

     test('Group Two Test Two', async({page})=>{
          console.log('This is my second test');
     })

     test('Group Two Test Third', async({page})=>{
          console.log('This is my third test');
     })

     test('Group Two Test Fourth', async({page})=>{
          console.log('This is my fourth test');
     })

     test('Group Two Test Fifth', async({page})=>{
          console.log('This is my fifth test');
     })



})