import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service.service';


@Component({
  selector: 'app-logout',
  template:'<ng-content></ng-content>' ,
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  constructor(private router: Router, private authService: AuthenticationService) { }
  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
