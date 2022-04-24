import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
allCourse:string[]=[];
  constructor(private service:CourseService) { //CourseService map this in app.module find provider key
    //let service=new CourseService();//this is not preferable 
    //insted of this we need to use dependancy injection by giving parameter in contructor
    //this.allCourse=service.getCourse();//we write this code in ngOnInit()
  }

  ngOnInit() {
    this.allCourse=this.service.getCourse()//this.service by makeing private service in constructor parameter
  }

}
