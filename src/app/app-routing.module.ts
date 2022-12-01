import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './routesecurity/route.guard';

const routes: Routes = [
  
  {path:'home',component:HomeComponent,canActivate:[RouteGuard]},
  {path:'home/:getProduct',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:MainComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:AddtocartComponent},
  {path:'profile',component:ProfileComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AppRoutingModule { }
