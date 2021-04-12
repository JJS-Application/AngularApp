import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from '../services/BaseService';
import { User } from '../models/user';
import { AppConfig } from '../config/config';
import { Helpers } from '../helpers/helpers';
@Injectable()
export class UserService extends BaseService {
  private pathAPI = this.config.setting['PathAPI'];
  constructor(private http: HttpClient, private config: AppConfig, helper: Helpers) { super(helper); }
  /** GET heroes from the server */
//   getUsers (): Observable<User[]> {
//     return this.http.get(this.pathAPI + 'user', super.header()).pipe(
//         catchError(e => throwError(e))
//     );
//   }

getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.pathAPI + 'user', super.header())
      .pipe(
        map((data) => {
           //we can perform some transformation here
           return data;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

}