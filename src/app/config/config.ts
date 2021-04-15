import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class AppConfig {
    private _config: { [key: string]: string };
    constructor() {
        this._config = { 
            PathAPI: 'http://localhost:57712/api/'
        };
    }
    get setting():{ [key: string]: string } {
        return this._config;
    }
    get(key: any) {
        return this._config[key];
    }
};