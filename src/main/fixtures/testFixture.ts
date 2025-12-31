// /*
// this testFixture.ts file is a custom Playwright fixture , used to add global 
// before and after logic also can share comon setup and teardown methods

// A fixture is a reusable setup that Playwright gives to your test automatically. 
//  */
// import { test as base } from '@playwright/test'; 
// import { Loginpage } from '../pages/Loginpage';
// import { Homepage } from '../pages/Homepage';
// import { Programspage } from '../pages/Programspage';
// /* 
// we are renaming the 'test' as base
// Why rename?
// Because we want to extend it and create our own custom test
//  */

//  export const test = base.extend<{ // insed this we are adding page references 
//   saveLogs:void,
  
//   loginpage:Loginpage,
//   homepage:Homepage,
//   programspage:Programspage
// // now create the object for these references 

// }>({ // saveLogs is fixture name 

//   saveLogs:[ // here we are defining the custom fixture (saveLogs) behaviour 

//       async({},use)=>{ // '{}' - no dependency fixutre , use- a function to call palywright test

//         console.log('before test -----')
//         await use();
//         console.log('after test -----')

//       }, 
//       { auto : true } // this means this fixture runs automatically NOT need to mention saveLogs in test files
//     ],
    
//     // Object creation for login page  
//     loginpage: async({page},use) =>{
//       const loginpage = new Loginpage(page);
//       await use(loginpage);
//     },

//     // Object creation for home page  
//     homepage: async({page},use) =>{
//       const homepage = new Homepage(page);
//       await use(homepage);
//     },

//     // Object creation for Programs page  
//     programspage: async({page},use) =>{
//       const programspage = new Programspage(page);
//       await use(programspage);
//     }
//  });
//  export{expect} from '@playwright/test';


/*
this testFixture.ts file is a custom Playwright fixture , used to add global 
before and after logic also can share comon setup and teardown methods

A fixture is a reusable setup that Playwright gives to your test automatically. 
 */
import { test as base } from '@playwright/test'; 
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Programspage } from '../pages/Programspage';
/* 
we are renaming the 'test' as base
Why rename?
Because we want to extend it and create our own custom test
 */

type AppPages = {
  login: Loginpage;
  home: Homepage;
  programs: Programspage;
};

 export const test = base.extend<{saveLogs:void,pages:AppPages}>({ // saveLogs is fixture name 

  saveLogs:[ // here we are defining the custom fixture (saveLogs) behaviour 

      async({},use)=>{ // '{}' - no dependency fixutre , use- a function to call palywright test

        console.log('before test -----')
        await use();
        console.log('after test -----')

      }, 
      { auto : true } // this means this fixture runs automatically NOT need to mention saveLogs in test files
    ],
    
    // Object creation for login page  
    pages: async({page},use) =>{
      
      await use({
      login: new Loginpage(page),
      home: new Homepage(page),
      programs: new Programspage(page),
      });
    },
 });
 export{expect} from '@playwright/test';
