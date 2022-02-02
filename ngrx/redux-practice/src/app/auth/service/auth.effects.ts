import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from '../auth.action';
import { AuthService } from './auth.service';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private http: HttpClient,
    private action$: Actions,
    private authService: AuthService
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            return loginSuccess();
          })
        );
      })
    );
  });
}
