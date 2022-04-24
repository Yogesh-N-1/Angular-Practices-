import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
mycolor:string='Red';
rating:number=5;
myjson={
  color:"red",
  fontStyle:"italic",
  "font-size":"30px"
}
  constructor() { }

  ngOnInit() {
  }

}
