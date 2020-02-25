import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '@src/app/services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'shared_test';
  private _cookieValue: string;

  constructor(private dataStorageService:  DataStorageService) { }

  ngOnInit() {
  }

  public set cookieValue(value: string) {
    this._cookieValue = value;
  }

  public get cookieValue(): string {
    return this._cookieValue;
  }

  public SaveCookie(): void {
    this.dataStorageService.write(this._cookieValue);
    console.log('here save');
  }

  public ReadCookie(): void {
    this._cookieValue = this.dataStorageService.read();
    console.log('here read');
  }
}
