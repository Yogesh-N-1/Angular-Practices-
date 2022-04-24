import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {
  arrObj=[{
  
    name:'hello', 
    price:54333,
    quntity:3
  },
  {
  
    name:'jio', 
    price:23337663,
    quntity:3
  },{
  
    name:'realme', 
    price:665777,
    quntity:3
  },{
  
    name:'realme', 
    price:22,
    quntity:3
  },{
  
    name:'realme', 
    price:4444,
    quntity:3
  },
  {
    name:"mi",
    price:344444,
    quntity:2
  }

]
  constructor() { }

  ngOnInit() {
  }

}
