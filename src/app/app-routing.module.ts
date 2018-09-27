import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmpByJobComponent} from './emp-by-job/emp-by-job.component';
import {EmpByDepComponent} from './emp-by-dep/emp-by-dep.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'getEmployees',
    children: [
      {path: '', component: EmployeesComponent},
      {path: 'byJob', component: EmpByJobComponent},
      {path: 'byJob/:job_id', component: EmployeesComponent},
      {path: 'byDep', component: EmpByDepComponent},
      {path: 'byDep/:dep_id', component: EmpByDepComponent}
    ], canActivate: [AuthGuard]
  },
  { path: 'detailEmployee/:employee_id', component: EmployeeComponent, canActivate: [AuthGuard]},
  { path: 'deleteEmployee/:employee_id', component: EmployeeComponent, canActivate: [AuthGuard]},
  { path: 'addEmployee', component: EmployeeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
