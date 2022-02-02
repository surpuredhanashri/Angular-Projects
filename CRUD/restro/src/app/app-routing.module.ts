import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component'

const routes: Routes = [
  {
    path:'add',
    component:AddRestroComponent,
  },
  // {
  //   path:'list',
  //   component:ListRestroComponent,
  // },
  {
    path:'update/:id',
    component:UpdateRestroComponent,
  },
  {
    component:ListRestroComponent,      //refractor
     path:'',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
