export class person{
   
    id:number
    fname:string
    lname:string
    constructor(id:number,fname:string,lname:string){
        this.id=id;
        this.fname=fname;
        this.lname=lname;
    }
    
    display(){//this is method not funtion we declare funtion outside class
        //inside class it is method
        
    console.log(`
    id        :${this.id}
    frist name:${this.fname}
    last name :${this.lname}
    `)
    
    }
    
    }

    export function add(a,b){ //make funtion outside class and we can export it
        return a+b
    }

    export const pi=3.14

