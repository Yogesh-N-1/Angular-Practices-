import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-tdf',
  templateUrl: './demo-tdf.component.html',
  styleUrls: ['./demo-tdf.component.css']
})
export class DemoTdfComponent implements OnInit {
  ContactMethod=[{id:1,name:"Email"},{id:2,name:"Phone"},{id:3,name:"Office Phone"}]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formref:NgForm){//NgForm is optional we can write or not compasory in above 12v 
    console.log("Username::",formref.value.username
    )
    console.log("Redio Button ::"+formref.value.con)
  }

}
