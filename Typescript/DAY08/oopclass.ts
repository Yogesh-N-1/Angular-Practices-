class myClass{
//property

id:number
fname:string
lname:string
//to create constructor we need to use constructor keyword 
//constructor can not be overlod in typescript
constructor(id:number,fname:string,lname:string){
    this.id=id;
    this.fname=fname;
    this.lname=lname;
}

display(){
console.log(`
id        :${this.id}
frist name:${this.fname}
last name :${this.lname}
`)

}

}

let v=new myClass(3,'yog','nik')
v.display()