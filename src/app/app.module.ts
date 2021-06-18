import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { EmployeeMainScreenComponent } from './employee-main-screen/employee-main-screen.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListEmployeeComponent } from './task-list-employee/task-list-employee.component';
import { TaskDetailsEmployeeComponent } from './task-details-employee/task-details-employee.component';
import { EmployeeDetailsEmployeeComponent } from './employee-details-employee/employee-details-employee.component';
import { AssignedTasksEmployeeComponent } from './assigned-tasks-employee/assigned-tasks-employee.component';
import { RegisterManagerComponent } from './register-manager/register-manager.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateTaskComponent,
    EmployeeLoginPageComponent,
    EmployeeMainScreenComponent,
    EmployeeListComponent,
    TaskListComponent,
    EmployeeDetailsComponent,
    TaskDetailsComponent,
    TaskListEmployeeComponent,
    TaskDetailsEmployeeComponent,
    EmployeeDetailsEmployeeComponent,
    AssignedTasksEmployeeComponent,
    RegisterManagerComponent,
    RegisterEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
