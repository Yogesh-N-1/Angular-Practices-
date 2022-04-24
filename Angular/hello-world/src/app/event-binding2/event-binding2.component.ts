import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {
  res:number=0;
  constructor() { }

  ngOnInit() {
  }

  // onClick(myevent){
  //   console.log(`data is ${myevent.value}`)

  // }
  
  addition(num1,num2){
    let a=+num1.value
    let b=+num2.value

    let c=a+b
    console.log(`addition is ${c}`)
    this.res=c
  }
  onClick(){
    console.log("click event occure")//change event will occour when focus relise
    
  }
  funclick(myevent){
console.log("change event occure")
console.log(`length of data is ${myevent.value.length}`)//it is to show lenght

  }

}
