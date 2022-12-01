import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }
  
  getProduct(){
    return this.Http.get<any>("/assets/data.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  men(){
    return this.Http.get<any>("/assets/mens.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  women(){
    return this.Http.get<any>("/assets/women.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  kids(){
    return this.Http.get<any>("/assets/kids.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  shoes(){
    return this.Http.get<any>("/assets/shoes.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
