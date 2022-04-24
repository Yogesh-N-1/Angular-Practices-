import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {
myjson={
  id:0,
  username:''
}
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromUrl()
  }
  GetDataFromUrl(){
this.route.queryParamMap.subscribe((param)=>{
  this.myjson.id=+param.get('id')
  this.myjson.username=param.get('username')
})
  }

  
}
