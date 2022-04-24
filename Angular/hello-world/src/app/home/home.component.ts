import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myid:number=2;
username:string='yogesh '

myjson={
  id:this.myid,
  username:this.username
}
//for dynamic routing we need to make dp injection for "Router" componet
//and use navigate method for redirect to next componet
  constructor(private route:Router) { }
 
  ngOnInit() {
   
  }



  // dynamic routing and queryparameter///////
  onPage1(){
    this.route.navigate(['/Page1'])

  }
  // if we want to send paremeter then 
  onPage2(){
    this.route.navigate(['/Page2',this.myid])
    
  }
  onPage3(){
    this.route.navigate(['/Page3',this.myid,this.username])
    
  }
  onFollower(){
    this.route.navigate(['/Follower'])

  }
  // if we want to send dynamic queryparametr

  onQueryParameter(){
    this.route.navigate(['/QueryParameter'],
    {
      queryParams:this.myjson //queryParams is a predifine key we need to use
    }
    )
  }

  //example login
  uname:string='yog'
  password:string='pass'
  onLogin(name,pass){

    if (this.uname==name&&this.password==pass) {
      this.route.navigate(['/Page1'])
      
    }

    else{
      alert("Enter Correct information")
    }
  }




}
