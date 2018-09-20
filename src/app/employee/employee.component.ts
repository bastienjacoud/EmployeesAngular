import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {CommonService} from '../services/common.service';
import {Job} from '../models/job';
import {Department} from '../models/department';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee: Employee;
  private employee_id: number;
  public title: string;
  public error: string;
  public jobs: Array<Job>;
  public departments: Array<Department>;

  constructor(private activatedRoute: ActivatedRoute,
              private employeService: EmployeeService,
              private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
    if (this.employee_id > 0) {
      this.title = 'Modifier un employé.';
      this.getEmploye(this.employee_id);
    } else {
      this.title = 'Ajouter un employé.';
    }
    this.getJobs();
    this.getDepartments();
  }

  getEmploye(id: number): void {
    this.employeService.getEmployee(id).subscribe(
      (employee) => {this.employee = employee; },
      (error) => {this.error = error.message; }
    );
  }

  getJobs(): void {
    this.commonService.getJobs().subscribe(
      (jobs) => {this.jobs = jobs; },
      (error) => {this.error = error.message; }
    );
  }

  getDepartments(): void {
    this.commonService.getDepartments().subscribe(
      (departments) => {this.departments = departments; },
      (error) => {this.error = error.message; }
    );
  }

  validateEmployee(id: number): void {
    if (id > 0) {
      if (isNaN(this.employee.job.job_id)) {
        this.error = 'Vous devez sélectionner un job.';
      } else {
        if (isNaN(this.employee.department.department_id)) {
          this.error = 'Vous devez sélectionner un département.';
        } else {
          this.employeService.updateEmployee(this.employee).subscribe(
            () => {this.router.navigate(['/getEmployees']); },
            (error) => {this.error = error.message; }
          );
        }
      }
    } else {
      this.employeService.addEmployee(this.employee).subscribe(
        () => {},
        (error) => {this.error = error.message; },
        () => { this.router.navigate(['/getEmployees']); }
      );
    }
  }
}
