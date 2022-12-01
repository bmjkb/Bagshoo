import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../servicefile/auth.service';
import { LgvalidationService } from '../servicefile/lgvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=''
  password=''

  constructor(

    public service: LgvalidationService,
    public snackbar:MatSnackBar,
    private router:Router,
    private AuthSevice:AuthService

  ) { }
  ngOnInit(): void {

   }
   
  Clear()
  {
    this.service.formValidates.reset();
    this.service.initializesForms();
  }
  login(){
    this.AuthSevice.JWTAuth(this.email,this.password).subscribe(data=>
    this.router.navigate(['home']))
  }
}
