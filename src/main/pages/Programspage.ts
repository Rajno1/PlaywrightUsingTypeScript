import { Page } from "@playwright/test";

export class Programspage{

    readonly page:Page;
    constructor(page:Page){
        this.page=page;
        // elements
    }


    async programsMethod(){
     console.log('This is program method ');
    }
    
    
}