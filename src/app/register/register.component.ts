import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LgvalidationService } from '../servicefile/lgvalidation.service';
import { NotificationService } from '../servicefile/notification.service';
import { RegisterService } from '../servicefile/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name=''
  email=''
  phone!:number
  password=''
  pincode!:number
  constructor(
    
    public service: LgvalidationService,
    public notificationService:NotificationService,
    public router:Router,
    private RegisterService:RegisterService
    ) { }
    
  ngOnInit(): void {}
  ClearValue()
  {
    this.service.formValidate.reset();
    this.service.initializeForms();
  }
 register(){
   this.RegisterService.RegisterUser(this.name,this.email,this.phone,this.password,this.pincode).subscribe(data=>{
     this.router.navigate(['login'])
     this.notificationService.successfullyCreated("Registration Done Successfully")})
  }
 login(){
   this.router.navigateByUrl('/'+'login')
 }
}
