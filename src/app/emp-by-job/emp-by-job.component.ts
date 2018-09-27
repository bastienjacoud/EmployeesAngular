import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-emp-by-job',
  templateUrl: './emp-by-job.component.html',
  styleUrls: ['./emp-by-job.component.css']
})
export class EmpByJobComponent implements OnInit {
  public title: string;
  public job_id: number;
  public error: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Choix d\'un job';
  }

  jobSelected(job_id: number): void {
    this.job_id = job_id;
    this.router.navigate(['getEmployees/byJob/' + job_id]);
  }

  reload(): void {
    this.router.navigate(['/getEmployees/byJob/' + this.job_id]);
  }

  gestionErreur(error: string): void {
    this.error = error;
  }
}
