import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chlid2',
  templateUrl: './chlid2.component.html',
  styleUrls: ['./chlid2.component.css']
})
export class Chlid2Component implements OnInit {


  @Output() childToParentEvent=new EventEmitter()
  childToParent:string='data from child to parent';

  constructor() { }

  ngOnInit() {
  }
  sendTo(){
    this.childToParentEvent.emit(this.childToParent)

  }

}
