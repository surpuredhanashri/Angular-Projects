import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post-routing.module').then((m) => m.PostRoutingModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./Counterr/counter-routing.module').then(
        (m) => m.CounterRoutingModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
