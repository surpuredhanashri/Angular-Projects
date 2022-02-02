import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor(private router:Router) { }

  canActivate(){
    let bReturn = true;

    if(localStorage.getItem('isLoggedIn') == 'false'){
      alert("Sorry, You are not allowed to view this page");
      this.router.navigate(['/home']);
    }
    return bReturn;
  }
}
