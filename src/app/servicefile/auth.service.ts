import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export const TOKEN= 'token'
export const AUTHENTICATE= 'authusser'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private Http:HttpClient,) { }
  IsLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATE)
    return !(user===null)
  }
  logout(){
    window.sessionStorage.clear()
    return true
  }
  JWTAuth(email:any,password:any){
    return this.Http.post<any>(`http://127.0.0.1:3000/restapi/auth/login`,{
      email,
      password}).pipe(map(data=>{sessionStorage.setItem(AUTHENTICATE,email),sessionStorage.setItem(TOKEN,`Bearer ${data.access_token}`);return data;}))
  }
  
}
