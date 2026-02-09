import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class Genralpage {

constructor(private http:HttpClient){}

apirul ="https://dummyjson.com/products";

getmydata()
{
  return this.http.get(this.apirul);
}



  
}
