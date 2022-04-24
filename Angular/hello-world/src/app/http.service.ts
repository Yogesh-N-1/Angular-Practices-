import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
private URL:string='https://jsonplaceholder.typicode.com/posts';
  constructor( private http:HttpClient) { 

  }
getPost(){
  return (this.http.get(this.URL));
}

postData(obj){
  return (this.http.post(this.URL,obj))

}

updateData(obj){
return (this.http.put(`${this.URL}/${obj.id}`,obj));
}

deleteData(id){
  return (this.http.delete(`${this.URL}/${id}`))
}

}
