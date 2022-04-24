import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {
myclass:string='table';

  arrObj=[{
  
    name:'realme', 
    price:23333,
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
  highlight:string;

  onmouse(item){
    console.log("on mouse over")
    this.highlight=item.name
  
    }

  mouseout(){
    console.log("mouse out")
    this.highlight=''
  }

}
