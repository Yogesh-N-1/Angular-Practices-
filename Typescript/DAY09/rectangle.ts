import { shape } from "./shape";
export class Rectangle extends shape{

    lenght:number
    breadth:number
    area:number
    constructor(l:number,b:number){
        super()
        this.lenght=l
        this.breadth=b
        this.area=0
    }
    override Myarea(){
        this.area=this.lenght*this.breadth
    }

    Display(){
        console.log(`
       Lenght is ::${this.lenght}
       Breadth is::${this.breadth} 
       Area is   ::${this.area}`)

    }

}