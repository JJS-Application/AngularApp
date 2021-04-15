import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Helpers } from '../helpers/helpers';
import { APIResponseDto } from '../models/Response';
import { NotificationService } from './notification.service'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
    constructor(private helper:Helpers,private http:HttpClient,private notificationService:NotificationService) { }
    public extractData(res: Response) {
        let body = res.json();
        return body || {};
      }     
      public handleError(error: any) {
        const errObj:APIResponseDto=error.error;
        var errMsg:string = 'Unknown error';
        // In a real-world app, we might use a remote logging infrastructure
       if(!errObj.Succeeded){
        errMsg = errObj.Message;
        this.notificationService.showError(errMsg,"Error!");       
       }    
       return throwError(errMsg);    
    }
      public header() {
        let header = new HttpHeaders({ 'Content-Type': 'application/json' });
        if(this.helper.isAuthenticated()) {
          header = header.append('Authorization', 'Bearer ' + this.helper.getToken()); 
        }
        return { headers: header };
      }
      public setToken(data:any) {
        this.helper.setToken(data);
      }
      public failToken(error: APIResponseDto | any) {
        this.helper.failToken();
        return this.handleError(APIResponseDto);
      }

      public async get(url:string) : Promise<Observable<APIResponseDto>>
      {
      var result = await  this.http.get<APIResponseDto>(url,this.header()).pipe(
        map((res:APIResponseDto)=>res),
        catchError(this.handleError.bind(this)));
        return result;
      }

      public  post(url:string,body:any) :Observable<APIResponseDto>
      {
      var result =  this.http.post<APIResponseDto>(url,body,this.header()).pipe(
        map((res:APIResponseDto)=>res),
        catchError(this.handleError.bind(this)));    
        debugger    
        return result;
      }
 }