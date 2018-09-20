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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, LoginService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
