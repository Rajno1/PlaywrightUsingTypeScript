import { test, expect } from '../src/main/fixtures/testFixture';

test('Login test', async ({ page, pages }) => { // these values from fixtures 

    // create and object of page class
    // const loginpage = new Loginpage(page);
    // await loginpage.goToUrl();

    // const loginpage = new Loginpage(page);
    // const homepage = new Homepage(page);
    // const programspage = new Programspage(page);

    await pages.login.loginMethod();
    await pages.home.homeMethod();
    await pages.programs.programsMethod();
    
    
})