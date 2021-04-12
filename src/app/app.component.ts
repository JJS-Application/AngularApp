import { Component, AfterViewInit,  } from '@angular/core';
import {Helpers} from './helpers/helpers'
import { Subscription } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public subscription: Subscription ;
  public authentication: boolean;
  constructor(private helpers: Helpers) {
  }
  ngAfterViewInit() {
    this.subscription = this.helpers.isAuthenticationChanged().pipe(
      startWith(this.helpers.isAuthenticated()),
      delay(0)).subscribe((value: boolean) =>
        this.authentication = value
      );
  }
  title = 'Jaipur Job seeker';
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
