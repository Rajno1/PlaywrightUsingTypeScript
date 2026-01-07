/**
 * in this mouse actions spec file we are learning about 
 * 1. Left click -> idententify the element.click({button : 'left'})
 * 2. Middle Click -> identifiy the element.click({button :'middle'})
 * 3. Right click  -> identify the element.click({button : 'right})
 * 4. Mouse over -> identify the element.hover();
 * 5. Dobule click -> identify the element.dblclick();
 * 
 */



import { test , expect } from '@playwright/test'
 
test('Mouse Actions', async({page})=>{

    await test.step('Mouse left click ', async()=>{

        await page.goto('https://issigmsdev.issi-software.com/pages/public')
        
        await page.getByRole('link',{name:'Login'}).click({button : 'left'})

    })

    // await test.step('Mouse middle click', async()=>{
        
    //     await page.getByText('Staff Portal Login').click({ button : 'middle'})

    //     })

    await test.step('Mouse right click',async()=>{

             await page.getByText('Staff Portal Login').click({ button : 'right'})
    })

    await test.step('Doing mouse over', async()=>{

            await page.getByRole('link',{name:'Home'}).hover();
            
            await page.getByRole('link',{name:'Home'}).

        })



    await test.step('double click',async()=>{

             await page.getByText('Staff Portal Login').dblclick();
    })
})

