import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  loginRoute: string[] = ['/'];
  tabIndex = -1;
  workers = [];
  tasks = [];

  constructor(private router: Router) { 

  }

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
    })
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
