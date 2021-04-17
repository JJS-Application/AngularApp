import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }         from './helpers/canActivateAuthGuard';
import { LoginComponent }   from './components/account/login.component';
import { LogoutComponent }   from './components/account/logout.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserComponent }      from './components/users/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component: UserComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
