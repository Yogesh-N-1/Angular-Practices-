import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
name;
  constructor() { }

  ngOnInit() {
  }

  onkeyUp(){

    console.log("key up event occur")
  }

  onkeyDown(){
    console.log("key down event occur")
  }

  count:number=0;
  limit;

  keyCount(){
    if (this.count<10){
      this.count++
    }
    else{
      console.log("limit is rich")
      this.limit='limit is over'
    }
  }


}
