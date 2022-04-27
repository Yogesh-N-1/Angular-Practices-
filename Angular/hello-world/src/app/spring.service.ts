import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringService {
private URl:string='http://localhost:8080/name';
  constructor(private http:HttpClient) { 

  }
  doGet(){
    return (this.http.get(this.URl));

  }
  
  

}
