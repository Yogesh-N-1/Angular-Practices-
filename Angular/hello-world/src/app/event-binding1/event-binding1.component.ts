import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onClick(){//this is used to send data to event binding and it is funtion
  console.log("this is data from onclick fuction")
}

onImgClick(){
  console.log("data from image click")
}
dollerEvent(myevent){
  console.log(myevent)//it will print object in the format of json 

  console.log(`value is ${myevent.target.value}`)//to get data from value key 
                                          //use key to access data 
}

}
