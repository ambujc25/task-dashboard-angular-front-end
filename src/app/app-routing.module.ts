import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { CreateTaskComponent } from "./create-task/create-task.component";
import { EmployeeDetailsEmployeeComponent } from "./employee-details-employee/employee-details-employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeLoginPageComponent } from "./employee-login-page/employee-login-page.component";
import { EmployeeMainScreenComponent } from "./employee-main-screen/employee-main-screen.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { RegisterEmployeeComponent } from "./register-employee/register-employee.component";
import { RegisterManagerComponent } from "./register-manager/register-manager.component";
import { TaskDetailsEmployeeComponent } from "./task-details-employee/task-details-employee.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'employee/login', component: EmployeeLoginPageComponent},
    { path: 'employee/dashboard', component: EmployeeMainScreenComponent},
    { path: 'manager/dashboard', component: MainScreenComponent},
    { path: 'manager/dashboard/create_task', component: CreateTaskComponent},
    { path: 'manager/dashboard/worker/:id', component: EmployeeDetailsComponent},
    { path: 'manager/dashboard/task/:id', component: TaskDetailsComponent},
    { path: 'employee/dashboard/task/:id', component: TaskDetailsEmployeeComponent},
    { path: 'employee/dashboard/worker/:id', component: EmployeeDetailsEmployeeComponent},
    { path: 'manager/register', component: RegisterManagerComponent},
    { path: 'employee/register', component: RegisterEmployeeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginPageComponent, MainScreenComponent];