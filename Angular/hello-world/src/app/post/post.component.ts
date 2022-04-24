import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts:any[]=[];
id:number;
title:string='';
body:string='';
isHidden:boolean=true;
  constructor(private Service:HttpService) { }

  ngOnInit() {
    this.GetPost();
}

GetPost(){
  this.Service.getPost()
.subscribe((response)=>{
  console.log(response)
  this.posts=(<any>response)
},(myerror)=>{alert("error is occur....")}) 
}

onSend(mytitle,mybody){
  let obj={
title:mytitle,
body:mybody
  }

this.Service.postData(obj).subscribe((response)=>{
  console.log(response);
},(myerror)=>{alert('error occur...')})
}
onEdit(item){
console.log(item)
  this.id=item.id;
  this.title=item.title;
  this.body=item.body;
  this.isHidden=false;

}

onUpdate(){
  let obj={
    id:this.id,
    title:this.title,
    body:this.body
  }

  this.Service.updateData(obj).subscribe((response)=>{
    console.log(response)
  },(myerror)=>{alert("error is occur....")})
}
onDelete(id){
  this.Service.deleteData(id).subscribe((response)=>{console.log(response)
  alert('data deleted'+response)},(myerror)=>{alert("error is occur....")})
}

}
