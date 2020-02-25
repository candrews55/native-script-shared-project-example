import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  readonly name = 'test';
  constructor(private cookieService: CookieService) { }

  read(): any {
    return this.cookieService.get(this.name);
  }

  write(value: any): void {
    this.cookieService.set(this.name, value.toString());
  }
}
