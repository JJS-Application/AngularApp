import { Injectable } from '@angular/core';
import { UserInfo } from '../models/Response';
import { AppConfig } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { AppConstant } from '../config/constant';
import { LoginViewModel } from '../models/Auth/LoginViewModel';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;
  private pathAPI = this.config.setting['PathAPI'];
  constructor(private http: HttpClient, private config: AppConfig,private appConstant:AppConstant) {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): UserInfo {
  return this.currentUserSubject.value;
}

login(userModel:LoginViewModel) {
  debugger
  return this.http.post<any>(`${this.pathAPI}${this.appConstant.login}`, userModel)
      .pipe(map(user => {
         debugger
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  var userInfo = new UserInfo();
  this.currentUserSubject.next(userInfo);
}
}
