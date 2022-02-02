import { AuthGuardServiceService } from './service/auth-guard-service.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'products',
    component:ProductComponent,
    canActivate:[AuthGuardServiceService]
  },
  {
    path:'products1/:id',
    component:ProductComponent,
    canActivate:[AuthGuardServiceService]
  },
  {
    path:'userlogin',
    component: UserLoginComponent,
    canActivate:[AuthGuardServiceService]
  },
  {
    path:'**',
    component:NoPageFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
