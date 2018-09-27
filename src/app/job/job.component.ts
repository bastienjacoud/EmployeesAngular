import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Job} from '../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() public job_id: number;
  @Output() choose = new EventEmitter();
  @Output() errorEmetteur = new EventEmitter();
  public jobs: Array<Job>;
  public error: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.commonService.getJobs().subscribe(
      (jobs) => {this.jobs = jobs; },
      (error) => {
        this.error = error.message;
        this.onError();
      }
    );
  }

  onChange(value: string) {
    this.job_id = +value;
    this.choose.emit(this.job_id);
  }

  onError(): void {
    this.errorEmetteur.emit(this.error);
  }

}
