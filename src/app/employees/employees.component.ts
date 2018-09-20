import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public title: string;
  public error: string;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.title = 'Liste de tous les employés.';
    this.employeeService.getEmployees().subscribe(
      (employees) => { this.employees = employees; },
      (error) => { this.error = error.message; }
    );
  }

  detail(employee_id: number) {
    this.router.navigate(['/detailEmployee/' + employee_id]);
  }

  delete(employee_id: number): void {
    this.employeeService.removeEmployee(employee_id).subscribe(
      () => console.log('suppr OK'),
      (error) => {this.error = error.message; }
    );
  }

}
