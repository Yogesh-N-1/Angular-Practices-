import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directiv',
  templateUrl: './switch-directiv.component.html',
  styleUrls: ['./switch-directiv.component.css']
})
export class SwitchDirectivComponent implements OnInit {
 choice:string='';
  constructor() { }

  ngOnInit() {
  }
isbg:string='black';
iscolor:string='white';
json={
  background:this.isbg,
  color:this.iscolor
}
  Onclick(incolor){
  this.choice=incolor.trim().toLowerCase()
  console.log(incolor)
  if(incolor!=''){
    console.log("i am here")
    this.isbg='red';
    this.iscolor='black';
  }

  }
  
}