import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './auth.reducer';
import { AUTH_STATE_NAME } from './auth.selector';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthEffects } from './service/auth.effects';

const route: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    EffectsModule.forFeature(),
    HttpClientModule,
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    ReactiveFormsModule,
  ],
  exports: [],
})
export class AuthRoutingModule {}
