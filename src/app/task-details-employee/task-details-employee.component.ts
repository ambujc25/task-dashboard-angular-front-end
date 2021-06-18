import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subscription } from 'rxjs';

import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-task-details-employee',
  templateUrl: './task-details-employee.component.html',
  styleUrls: ['./task-details-employee.component.css']
})
export class TaskDetailsEmployeeComponent implements OnInit {

  dashboardRoute: string[] = ['employee/dashboard'];
  loginRoute: string[] = ['/'];
  currentRoute: string = this.router.url;

  constructor(private route: ActivatedRoute, private router: Router) { }
  private routeSub: Subscription;
  routeId: string;

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  dataHere = false;
  userData: {
    title: '',
    desc: '',
    manager: {
      first_name: '',
    },
    time_to_complete: '',
    answer: '',
    points: '',
    worker: {
      first_name: '',
      _id: '',
    },
    status: ''
  };

  workerId: string = localStorage.getItem('token');
  currentId: string = '';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.routeId = params.id;
    })
    
    fetch('http://localhost:3000/task/get/' + this.routeId,{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.userData = response;
      this.dataHere = true;

      let decodedToken = this.getDecodedAccessToken(this.workerId);
      this.currentId = decodedToken.user._id;

      console.log(this.userData);
    })

  }
 
  selectTask(){
    let url = 'http://localhost:3000/worker/logged/select_task/';
    let params = {
      secret_token: localStorage.getItem("token"),
    }
    console.log(url + this.routeId + '?' + new URLSearchParams(params));

    fetch(url + this.routeId + '?' + new URLSearchParams(params), {
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.router.navigate(this.dashboardRoute);
    })
  }

  addAnswer(){
    let url = 'http://localhost:3000/worker/logged/solve_task/' + this.routeId;
    let link = (<HTMLInputElement>document.getElementById("solution")).value;
    let params = {
      secret_token: localStorage.getItem("token"),
      answer: link,
    }
    fetch(url + '?' + new URLSearchParams(params),{
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.router.navigate(this.dashboardRoute);
    })
  }
}
