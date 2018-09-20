import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private employeeSrvUrl: string = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  getUser(login: string): Observable<any> {
    const url: string = this.employeeSrvUrl + 'getUser';
    return this.httpClient.post(url, JSON.stringify(login));
  }
}
