import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringService {
private URl:string=''
  constructor(private http:HttpClient) { 

  }
  doPost(){
    return (this.http.get(this.URl));
  }
}
