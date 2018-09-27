import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public error: string;
  @Input() public employees: Array<Employee>;
  @Output() reload = new EventEmitter();

  constructor(private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  detail(employee_id: number) {
    this.router.navigate(['/detailEmployee/' + employee_id]);
  }

  delete(employee_id: number): void {
    this.employeeService.removeEmployee(employee_id).subscribe(
      () => { },
      (error) => {this.error = error.message; },
      () => { this.reload.emit(); }
    );
  }

}
