/**
 * Parameterization (passing testdata)-> is defining something using variable or placeholders(parameters)
 * so it can be easily used of different inputs.
 */

import { test , expect } from '@playwright/test'

const values = ['fistvalue','secondvalue','thirdvalue']

for (const value of values) {
    
    test(`parameterizaiton ${value}`,async({page}) => {
        console.log('the value is :' + value)
})
}

