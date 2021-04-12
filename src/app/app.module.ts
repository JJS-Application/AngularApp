import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component'


import { LogoutComponent }   from './components/account/login/logout.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserComponent }      from './components/users/user.component';
import { LoginComponent } from './components/account/login/login.component';
import { Helpers } from './helpers/helpers';
import {FormsModule} from '@angular/forms';

// new code that works
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

import { CommonModule } from '@angular/common/'
import { MatTableModule } from '@angular/material/table'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    UserComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, 
     CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
