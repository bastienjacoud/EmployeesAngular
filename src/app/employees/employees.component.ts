import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public title: string;
  public error: string;
  public job_id: number;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.job_id = +this.activatedRoute.snapshot.paramMap.get('job_id');
    if (this.job_id > 0) {
      this.getEmployeesByJob(this.job_id);
    } else {
      this.getEmployees();
    }
  }

  getEmployees(): void {
    this.title = 'Liste de tous les employés.';
    this.sharedService.setOriginalURL('/getEmployees');
    this.employeeService.getEmployees().subscribe(
      (employees) => { this.employees = employees; },
      (error) => { this.error = error.message; }
    );
  }

  getEmployeesByJob(job_id: number): void {
    this.title = 'Liste des employés d\'un job';
    this.sharedService.setOriginalURL('/getEmployees/byJob/' + this.job_id);
    this.employeeService.getEmployeesByJob(job_id).subscribe(
      (data) => { this.employees = data; },
      (error) => { this.error = error.message; }
    );
  }

  reload(): void {
    if (this.job_id > 0) {
      this.getEmployeesByJob(this.job_id);
    } else {
      this.getEmployees();
    }
  }
}
