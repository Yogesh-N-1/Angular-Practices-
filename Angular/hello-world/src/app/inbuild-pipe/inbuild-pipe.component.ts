import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {
mytime=new Date();//to get currunt date and time
mystr:string="this is string data to perform slice operation "
  constructor() { }

  ngOnInit() {
  }

}
