import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component'


import { LogoutComponent }   from './components/account/logout.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserComponent }      from './components/users/user.component';
import { LoginComponent } from './components/account/login.component';
import { Helpers } from './helpers/helpers';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { BearerAuthInterceptor } from './services/auth-interceptor.service';


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
    ReactiveFormsModule,
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
    MatProgressSpinnerModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BearerAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
