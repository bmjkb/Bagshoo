import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    
    private Http:HttpClient
    
    ) { }

  RegisterUser(name:string,email:any,phone:number,password:any,pincode:number){
    return this.Http.post<any>(`http://127.0.0.1:3000/restapi/auth/register`,{
      name,
      email,
      phone,
      password,
      pincode
    }).pipe(map(data=>{return data;}))

  }
}
