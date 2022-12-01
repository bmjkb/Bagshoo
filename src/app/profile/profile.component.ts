import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../servicefile/auth.service';
import { EditService } from '../servicefile/edit.service';
import { NotificationService } from '../servicefile/notification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  panelOpenState = false;
  name!:string
  email!:any
  phone!:number
  password!:any
  pincode!:any
  profiledetails!:any
  constructor(
    
    private editservice:EditService,
    public notificationService:NotificationService,private AuthService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  editname(){
    return this.editservice.editname(this.name).subscribe(data=>{
    this.profile()})
  }
  editemail(){
  return this.editservice.editname(this.name).subscribe(data=>{
    this.profile()})
    }
  editphone(){
  return this.editservice.editname(this.name).subscribe(data=>{
    this.profile()})
  }
  editpassword(){
  return this.editservice.editname(this.name).subscribe(data=>{
    this.profile()
    if(this.AuthService.logout()){
      this.route.navigate(['/'])
    }})
  }
  editpincode(){
  return this.editservice.editname(this.name).subscribe(data=>{
    this.profile()})
  }
  profile(){
    this.notificationService.successfullyCreated('saved changes')
  }
}

