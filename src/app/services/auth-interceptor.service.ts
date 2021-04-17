import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication-service.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BearerAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.jwToken) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser.jwToken}`
            }
        });
    }

    return next.handle(request);
}
}
