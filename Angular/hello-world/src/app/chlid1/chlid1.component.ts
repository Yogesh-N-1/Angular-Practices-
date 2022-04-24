import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chlid1',
  templateUrl: './chlid1.component.html',
  styleUrls: ['./chlid1.component.css']
})
export class Chlid1Component implements OnInit {
  @Input() dataFromParent:string='';
 @Input() parentArryobj={};
 @Input() parentarry={};
  constructor() { }

  ngOnInit() {
  }

}
