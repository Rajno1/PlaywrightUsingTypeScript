import { Page } from "@playwright/test";

export class Loginpage{

    readonly page:Page; // class level variable of Playwright page type

    constructor(page:Page){ // passing page as an argumetn to the constructor
        this.page=page; // assigning the argumtne to class variable 
        
        // elements
   
    }


    // methods
    async goToUrl(){
        await this.page.goto(`${process.env.PG_GMS_URL}`);
       // await this.page.goto('/');
    }


}