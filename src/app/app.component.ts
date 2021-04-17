import { Component, AfterViewInit,  } from '@angular/core';
import {Helpers} from './helpers/helpers'
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public subscription: Subscription ;
  public authentication: boolean=false;
  constructor(private helpers: Helpers,private authenticationService: AuthenticationService,) {
  }
  ngAfterViewInit() {    
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
        // logged in so return true
        this.authentication = true
    }
  }
  title = 'Jaipur Job seeker';
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
