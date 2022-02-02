import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../Services/auth-guard.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private authGuardService: AuthGuardService
  ) {}

  paramObj: any;
  ngOnInit(): void {}

  public totalItem: number = 0;

  varlogin = false;
  logInForAuthGuard() {
    // this.authenticationService.login();
    if (this.authenticationService.logval == true) this.varlogin = true;
  }
  logOutForAuthGuard() {
    this.authenticationService.logout();
    if (this.authenticationService.logval == false) this.varlogin = false;
  }

  //
  authen: Boolean = false;

  ngDoCheck() {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.authen = true;
    } else {
      this.authen = false;
    }
  }
}
