import { RestService } from './service/rest.service';
import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Routing';

  strUIDForQueryParams = 'Dhaanshri';
  strPWDForQueryParams = 'admin';

  constructor (private authenticationService:AuthenticationService, private restService : RestService){}

  logInForAuthGuard(){
    this.authenticationService.login();
  }

  logOutForAuthGuard(){
    this.authenticationService.logout();
  }


}
