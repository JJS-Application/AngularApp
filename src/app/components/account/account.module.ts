import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/login/logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
