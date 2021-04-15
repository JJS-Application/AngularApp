import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject,throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { APIResponseDto, Data } from '../models/Response';
import { NotificationService } from '../services/notification.service'

@Injectable({
    providedIn: 'root'
  })
export class Helpers  {
    private authenticationChanged = new Subject<boolean>();   
    constructor(private toastr:ToastrService,private notificationService: NotificationService) {
    }
    public isAuthenticated():boolean {
        return (!(window.localStorage['token'] === undefined || 
            window.localStorage['token'] === null ||
            window.localStorage['token'] === 'null' ||
            window.localStorage['token'] === 'undefined' ||
            window.localStorage['token'] === ''));
    }
    public isAuthenticationChanged():any {
        return this.authenticationChanged.asObservable();
    }
    public getToken():any {
        if( window.localStorage['user'] === undefined || 
            window.localStorage['user'] === null ||
            window.localStorage['user'] === 'null' ||
            window.localStorage['user'] === 'undefined' ||
            window.localStorage['user'] === '') {
            return '';
        }
        debugger
        let obj = JSON.parse(window.localStorage['user']);
        return obj.jwToken;
    }
    public setToken(data:any):void {
        this.setStorageToken(JSON.stringify(data));
    }
    public failToken():void {
        this.setStorageToken(undefined);
    }
    public logout():void {
        this.setStorageToken(undefined);
    }   
    private setStorageToken(value:any):void {
        var obj:any = JSON.parse(value);
        var user:Data = obj.data;  
        if(user.isVerified){
        window.localStorage['user'] = JSON.stringify(user);
        this.authenticationChanged.next(this.isAuthenticated());
        }
        else{
            const errMsg="User Not Verified, Please check mail link and verfiy account.";
            this.notificationService.showError(errMsg,"Error!"); 
             throwError(errMsg);    
        }
    }
}