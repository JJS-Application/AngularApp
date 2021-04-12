import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { Helpers } from '../../../helpers/helpers';
import {AppModule} from '../../../app.module'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private helpers: Helpers, private router: Router, private tokenService: TokenService) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    let authValues = {"Username":this.username, "Password":this.password};
    this.tokenService.auth(authValues).subscribe((token: any) => {
      this.helpers.setToken(token);
      this.router.navigate(['/dashboard']);
    });
  }
} 
