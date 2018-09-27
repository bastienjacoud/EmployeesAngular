import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {CommonService} from '../services/common.service';
import {Job} from '../models/job';
import {Department} from '../models/department';
import { Location} from '@angular/common';
import {SharedService} from '../services/shared.service';

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

  constructor(private activatedRoute: ActivatedRoute,
              private employeService: EmployeeService,
              private commonService: CommonService,
              private router: Router,
              private location: Location,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
    if (this.employee_id > 0) {
      this.title = 'Modifier un employé.';
      this.getEmploye(this.employee_id);
    } else {
      this.title = 'Ajouter un employé.';
    }
  }

  getEmploye(id: number): void {
    this.employeService.getEmployee(id).subscribe(
      (employee) => {this.employee = employee; },
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
            () => {
              const originalURL: string = this.sharedService.getOriginalURL();
              this.router.navigate([originalURL]);
            },
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

  cancel(id: number): void {
    if (id > 0) {
      this.location.back();
    } else {
      this.router.navigate(['/home']);
    }
  }

  jobSelected(job_id: number): void {
    this.employee.job_id = job_id;
  }

  departmentSelected(department_id: number): void {
    this.employee.department_id = department_id;
  }

  gestionError(error: string): void {
    this.error = error;
  }
}
