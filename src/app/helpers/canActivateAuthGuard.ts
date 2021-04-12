import { CanActivate, Router,UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helpers } from './helpers';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Helpers, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean | UrlTree {
    // if user is authenticated just return true;
    if (this.auth.isAuthenticated()) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}