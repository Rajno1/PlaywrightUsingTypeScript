import { Page } from "@playwright/test";

export class Homepage{

    readonly page:Page; // class level variable of Playwright page type

    constructor(page:Page){ // passing page as an argumetn to the constructor
        this.page=page; // assigning the argumtne to class variable 
        
        // elements
   
    }


    // methods
    

    async homeMethod(){
        console.log('This is home method');
    }

}