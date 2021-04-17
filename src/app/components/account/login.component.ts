import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginViewModel } from 'src/app/models/Auth/LoginViewModel';
import { AuthenticationService } from 'src/app/services/authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder,
     private router: Router, 
     private route: ActivatedRoute,
     private authService: AuthenticationService) { }

  formGroup: FormGroup;
  returnUrl: string;
  error = '';
  ngOnInit() {
    this.createForm();
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
    this.authService.login(login)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
        });
  }
} 
