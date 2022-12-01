import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(

    public snackbar:MatSnackBar
    
    ) { }

  matSnackConfig:MatSnackBarConfig={
    verticalPosition:'bottom',
    horizontalPosition:'center',
    duration:5000
  }
  successfullyCreated(message:any){
    this.matSnackConfig['panelClass']=['notification','success'];
    this.snackbar.open(message,'',this.matSnackConfig)
  }  
}
