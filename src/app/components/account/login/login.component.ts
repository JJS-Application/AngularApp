import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { Helpers } from '../../../helpers/helpers';
import {AppModule} from '../../../app.module'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginViewModel } from 'src/app/models/Auth/LoginViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder,
    private helpers: Helpers,
     private router: Router, 
     private tokenService: TokenService) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  
  getError(el:string):string {   
    var errorMessgae = "";
    switch (el) {
      case 'user':
        if (this.formGroup.controls['username'].hasError('required')) {
          errorMessgae= 'Username is required';
        }
        break;
      case 'pass':
        if (this.formGroup.controls['password'].hasError('required')) {
          errorMessgae='Password is required';
        }
        break;
    }
    return errorMessgae;
  }

  async onSubmit(): Promise<void> {    
    const login: LoginViewModel = new LoginViewModel();
    login.Email =this.formGroup.controls['username']?.value;
    login.Password =this.formGroup.controls['password']?.value;
    this.tokenService.auth(login).subscribe((token: any) => {
      debugger
      this.helpers.setToken(token);
      this.router.navigate(['/dashboard']);
     var a= this.helpers.getToken();
     debugger
    });
  }
} 
