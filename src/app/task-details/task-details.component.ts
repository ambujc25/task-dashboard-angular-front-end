import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

  dashboardRoute: string[] = ['manager/dashboard'];
  loginRoute: string[] = ['/'];

  constructor(private route: ActivatedRoute, private router: Router) { }
  private routeSub: Subscription;
  routeId: string;

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

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.routeId = params.id;
    })
    
    fetch('http://localhost:3000/task/get/' + this.routeId,{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.userData = response;
      this.dataHere = true;
    })
  }

  deleteTask(){
    if(localStorage.getItem("token")===null){
      this.router.navigate(this.loginRoute);
    }else{
      let params = {
        secret_token: localStorage.getItem("token"),
      }

      fetch('http://localhost:3000/manager/logged/delete_task/' + this.routeId + '?' + new URLSearchParams(params),{
        method: 'POST',
        mode: 'cors'
      }).then(response => response.json()).then(response => {
        console.log(response);
        this.router.navigate(this.dashboardRoute);
      })
    }
  }   

  checkTask(){
    let points = (<HTMLInputElement>document.getElementById("points")).value;
    let status = (<HTMLInputElement>document.getElementById("status")).value;

    const params = {
      secret_token: localStorage.getItem('token'),
      points: points,
      status: status,
    }

    fetch('http://localhost:3000/manager/logged/check_task/' + this.routeId + '?' + new URLSearchParams(params),{
      method: "POST",
      mode: 'cors'
    }).then(response=> response.json()).then(response =>{
      console.log(response);
      this.router.navigate(this.dashboardRoute);
    })
  }

}
