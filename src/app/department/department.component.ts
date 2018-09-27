import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Department} from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() public department_id: number;
  @Output() choose = new EventEmitter();
  @Output() errorEmit = new EventEmitter();
  public departments: Array<Department>;
  public error: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.commonService.getDepartments().subscribe(
      (departments) => {this.departments = departments; },
      (error) => {
        this.error = error.message;
        this.onError();
      }
    );
  }

  onChange(value: string) {
    this.department_id = +value;
    this.choose.emit(this.department_id);
  }

  onError(): void {
    this.errorEmit.emit(this.error);
  }
}
