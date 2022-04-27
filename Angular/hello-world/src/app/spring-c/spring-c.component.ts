import { Component, OnInit } from '@angular/core';
import { SpringService } from '../spring.service';

@Component({
  selector: 'app-spring-c',
  templateUrl: './spring-c.component.html',
  styleUrls: ['./spring-c.component.css']
})
export class SpringCComponent implements OnInit {
  res:string='';
  constructor(private service:SpringService) { }

  
  ngOnInit() {
  this.GetPost();
    
  }
  GetPost(){
    this.service.doGet()
  .subscribe((response)=>{
    console.log(response)
    this.res=(<any>response)
  }) 
  }
}