import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication-service.service';
import { APIResponseDto } from '../models/Response';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private notification :NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    return next.handle(request).pipe(catchError(err => {
      var error:string = err.message || err.statusText;
          if (err.status === 401 || err.status === 403 ) {
              // auto logout if 401 response returned from api
              this.authenticationService.logout();
              location.reload(true);
          }
          else if(err.status === 400) 
          {
          const errObj:APIResponseDto =   err.error;
            if(!errObj.Succeeded){
              error = errObj.Message;
              this.notification.showError(errObj.Message,"Error!");
            }
          }          
          return throwError(error);
      }))
  }
}
