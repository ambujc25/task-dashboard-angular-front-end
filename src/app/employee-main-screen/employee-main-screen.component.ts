import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-employee-main-screen',
  templateUrl: './employee-main-screen.component.html',
  styleUrls: ['./employee-main-screen.component.css']
})
export class EmployeeMainScreenComponent implements OnInit {

  loginRoute: string[] = ['/'];
  tabIndex = -1;
  workers = [];
  tasks = [];

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  constructor(private router: Router) { 

  }

  workerId: string;

  ngOnInit(): void {
    if(localStorage.getItem("token")===null){
      this.router.navigate(this.loginRoute);
    }

    fetch('http://localhost:3000/worker/get_all',{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      this.workers = response;
    })

    fetch('http://localhost:3000/task/get_all',{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      this.tasks = response;
      console.log(this.tasks);
    })

    let token = localStorage.getItem('token');
    let decodedToken = this.getDecodedAccessToken(token);
    this.workerId = decodedToken.user._id;
  }

  current_page =  'Home';

  getWorkers(){
    /*fetch('http://localhost:3000/worker/get_all',{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.workers = response;
    })*/

    this.tabIndex = 0;
    this.current_page = 'Worker List';
  }

  getTasks(){
    /*fetch('http://localhost:3000/task/get_all',{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
    })*/

    this.tabIndex = 1;
    this.current_page = 'Tasks List';
  }

  getProfile(){
    this.tabIndex = 2;
  }

  navigateCreateTask(){
    let createTaskRoute: string[] = ['/manager/dashboard/create_task'];
    this.router.navigate(createTaskRoute);
  }

  logout(){
    localStorage.removeItem("token");
    
    this.router.navigate(this.loginRoute);
  }

  check(){
    console.log()
  } 

}
