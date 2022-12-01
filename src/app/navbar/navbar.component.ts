import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicefile/auth.service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  [x: string]: any;
 
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;

     }
     
  getProduct:string=''
  public totalItem:number=0;
  constructor(
   
    private AuthService:AuthService,
    private route:Router,
    public api:ApiService,
    private routea:ActivatedRoute,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    })
    
  }
  
  Logout(){
    if(this.AuthService.logout()){
      this.route.navigate(['/'])
    }
  }
  carts(){
    this.route.navigateByUrl('/'+'cart');
  }
  search(){
    this.route.navigateByUrl('home/'+this.getProduct)
   
  }
}
