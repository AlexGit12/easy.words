import { Injectable } from '@angular/core';
import * as ApplicationSettings from "application-settings";

@Injectable()
export class AppSettingsService {
  
    static APP_NAME = 'easy.words';

    private getStorageKey(key:string) : string {
        return AppSettingsService.APP_NAME + '.' + key;
    }

    public saveValue(key:string, value:Object){
        ApplicationSettings.setString(this.getStorageKey(key), JSON.stringify(value));
    }

    public getValue(key:string) : Object {
        return JSON.parse(ApplicationSettings.getString(this.getStorageKey(key), '[]'));
    }

}