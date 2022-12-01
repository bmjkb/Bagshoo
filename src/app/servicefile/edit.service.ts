import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AUTHENTICATE, TOKEN } from './auth.service';

const user =sessionStorage.getItem(AUTHENTICATE);


@Injectable({
  providedIn: 'root'
})
export class EditService {
  constructor(private Http:HttpClient) { }
  editname(editname:string){
    return this.Http.put<any>(`http://127.0.0.1:3000/restapi/user/update_name`,{user,editname})
  }
  editemail(email:string){
    return this.Http.put<any>(`http://127.0.0.1:3000/restapi/user/update_email`,{user,email})
  }
  editphone(phone:string){
    return this.Http.put<any>(`http://127.0.0.1:3000/restapi/user/update_phone`,{user,phone})
  }
  editpassword(password:string){
    return this.Http.put<any>(`http://127.0.0.1:3000/restapi/user/update_password`,{user,password})
  }
  editpincode(pincode:string){
    return this.Http.put<any>(`http://127.0.0.1:3000/restapi/user/update_pincode`,{user,pincode})
  }
  
}
