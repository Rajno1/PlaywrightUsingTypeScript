import { test , expect } from '@playwright/test'

test.beforeAll(async() => {
    await console.log(' Running before all tests ....')
})

test.afterAll(async()=> {
    await console.log('Running after all tests ....')
})

test.beforeEach(async() => {
    await console.log(' before each test ...')
})

test.afterEach(async() => {
    await console.log(' after each test ...')
})




test('first test', async ({page}) => {
    await console.log('first test...')
})

test('second test', async ({page}) => {
    await console.log('second test...')
})

test('third test', async ({page}) => {
    await console.log('third test...')
})

