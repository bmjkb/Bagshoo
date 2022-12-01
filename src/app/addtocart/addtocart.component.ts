import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public eflag!:boolean;
  public sflag!:boolean;
  constructor(
    private cartService : CartService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  success(){
    this.route.navigate(['checkout'])
    this.cartService.removeAllCart();
  }
}
