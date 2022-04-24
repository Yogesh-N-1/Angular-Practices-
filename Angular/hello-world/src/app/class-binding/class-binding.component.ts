import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
 myclass:string='special'  //this value is coming from css file where .special is class
 rating:number=3;
 isError:boolean=true;
 isSpecial:boolean=true;
 myjson={
"success":!this.isError,
"warning":this.isError,
"special":this.isSpecial
 }
 constructor() { }

  ngOnInit() {
  }




}
