import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private employeeSrvUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getJobs');
  }

  getDepartments(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getDepartments');
  }
}
