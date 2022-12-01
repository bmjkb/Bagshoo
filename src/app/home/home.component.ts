import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList:any;
  public kids:any;
  public women:any;
  public men:any;
  public shoes:any;
  public filterCategory:any
  public array :Product[]=[];
  public getdet:Product[]=[];
  searchKey:string="";

  constructor(private api:ApiService,private cart:CartService,private routea:ActivatedRoute) { }

  ngOnInit(): void {
    this.cart.searchproduct().subscribe((response) =>{
      
      for(let key in response){
          let p = new Product();
          p.id=key;
          p.Name=response[key].Name
          p.Brand=response[key].Brand
          p.category=response[key].category
          p.price=response[key].price
          p.image=response[key].image
          this.array.push(p)
      }
      
    
    });
        this.api.men().subscribe(res=>{
          this.productList=res;
          this.men=res;
          this.productList.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price});
          });
        });
          this.api.women().subscribe(res=>{
            this.productList=res;
            this.women=res;
            this.productList.forEach((a:any)=>{
            Object.assign(a,{quantity:1,total:a.price});
            });
          });
            this.api.kids().subscribe(res=>{
              this.productList=res;
              this.kids=res;
              this.productList.forEach((a:any)=>{
                Object.assign(a,{quantity:1,total:a.price});
              });
            });
              this.api.shoes().subscribe(res=>{
                this.productList=res;
                this.shoes=res;
                this.productList.forEach((a:any)=>{
                  Object.assign(a,{quantity:1,total:a.price});
                });
              });
              this.api.getProduct().subscribe(res=>{
                this.productList=res;
                this.productList.forEach((a:any)=>{
                  Object.assign(a,{quantity:1,total:a.price});
                });
              });
              this.routea.params.subscribe(params=>{
                if(params['getProduct']){
                  console.log(params['getProduct'])
                  this.productList=this.array.filter(productList=>productList.Name.includes(params['getProduct'].toLowerCase()))
                  this.productList.forEach((a:any)=>{
                  Object.assign(a,{quantity:1,total:a.price});
                });
               }
               else{
                  this.productList=this.array
                  this.productList.forEach((a:any)=>{
                    Object.assign(a,{quantity:1,total:a.price});
                  });
                }
              })
  }
  
  addtoCart(item:any){
    this.cart.addtoCart(item);
  }
}
