import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
mystr:string='this is data to impliment custom pipe and see it uses ,1 we need to make summary.pipe.ts file then make class.';


constructor() { 

}

ngOnInit() {
  }

}
