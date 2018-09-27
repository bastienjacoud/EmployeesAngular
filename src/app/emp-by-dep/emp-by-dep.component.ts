import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../models/employee';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-emp-by-dep',
  templateUrl: './emp-by-dep.component.html',
  styleUrls: ['./emp-by-dep.component.css']
})
export class EmpByDepComponent implements OnInit {
  public title: string;
  public department_id: number;
  public employees: Array<Employee>;
  public error: string;

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.title = 'Liste des employés d\'un département';
    const dep_id: number = +this.activatedRoute.snapshot.paramMap.get('dep_id');
    if (dep_id > 0) {
      this.depSelected(dep_id);
    }
  }

  depSelected(dep_id: number): void {
    this.department_id = dep_id;
    this.getEmployeesByDep(dep_id);
  }

  getEmployeesByDep(dep_id: number): void {
    this.sharedService.setOriginalURL('/getEmployees/byDep/' + this.department_id);
    this.employeeService.getEmployeesByDep(dep_id).subscribe(
      (data) => { this.employees = data; },
      (error) => { this.error = error.message; }
    );
  }

  reload(): void {
    this.getEmployeesByDep(this.department_id);
  }

  gestionErreur(error: string): void {
    this.error = error;
  }
}
