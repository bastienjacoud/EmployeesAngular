import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeSrvUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployees');
  }

  getEmployee(employee_id: number): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployee/' + employee_id);
  }

  removeEmployee(employee_id): Observable<any> {
    return this.httpClient.delete(this.employeeSrvUrl + 'deleteEmployee/' + employee_id);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(this.employeeSrvUrl + 'addEmployee', JSON.stringify(employee));
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put(this.employeeSrvUrl + 'updateEmployee', JSON.stringify(employee));
  }
}
