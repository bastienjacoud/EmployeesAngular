import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { SharedService } from './services/shared.service';
import { HomeComponent } from './home/home.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './services/employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { JobComponent } from './job/job.component';
import { DepartmentComponent } from './department/department.component';
import { EmpByJobComponent } from './emp-by-job/emp-by-job.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpByDepComponent } from './emp-by-dep/emp-by-dep.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    ErrorComponent,
    JobComponent,
    DepartmentComponent,
    EmpByJobComponent,
    EmpListComponent,
    EmpByDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, LoginService, EmployeeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
