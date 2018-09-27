import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public isConnected: boolean;
  public originalURL: string;

  public setOriginalURL(url: string) { this.originalURL = url; }
  public getOriginalURL() {
    let url: string = this.originalURL;
    if (url === '') {
      url = '/home';
    }
      this.originalURL = '';
      return url;
  }

  constructor() { }
}
