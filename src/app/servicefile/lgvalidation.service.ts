import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LgvalidationService {

  constructor() { }

  formValidate:FormGroup=new FormGroup({
    Name:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Phonenumber:new FormControl('',[Validators.required,Validators.minLength(10)]),
    PassWord:new FormControl('',[Validators.required,Validators.minLength(8)]),
    Pincode:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  initializeForms()
  {
    this.formValidate.setValue({
      Name:'',
      Email:'',
      Phonenumber:'',
      PassWord:'',
      Pincode:'',
    })
  }
  
  formValidates:FormGroup=new FormGroup({
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  initializesForms()
  {
    this.formValidates.setValue({
      Email:'',
      Password:''
    })
  }
}
