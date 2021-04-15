import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConfig } from '../config/config';
import { BaseService } from './BaseService';
import { Helpers } from '../helpers/helpers';
import { AppConstant } from '../config/constant';
import { APIResponseDto } from '../models/Response';
import { NotificationService } from './notification.service'


@Injectable({
  providedIn: 'root'
})
export class TokenService extends BaseService {
  private pathAPI = this.config.setting['PathAPI'];
  public errorMessage: string = "";
  constructor(private appConstant:AppConstant,
    private httpclient: HttpClient, 
    private config: AppConfig,private helpers: Helpers,private notification:NotificationService) { 
      super(helpers,httpclient,notification); 
    }

  auth(data: any): any {
    let body = JSON.stringify(data);
    return this.getToken(body);
  }
  
  private  getToken (body: any): Observable<APIResponseDto> {
    const url = `${this.pathAPI}${this.appConstant.login}`;
   return  super.post(url,body);
  }
}