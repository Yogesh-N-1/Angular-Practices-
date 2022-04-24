import { shape } from "./shape";

export class circle extends shape{
    radius:number
    area:number
    constructor(r:number){
        super();
        this.radius=r
        this.area=0

    }


    Myarea() {
        this.area=3.14*this.radius*this.radius
        
    }


    Display(){

        console.log(`
        redius ::${this.radius}
        area   ::${this.area}
        `)
    }

}