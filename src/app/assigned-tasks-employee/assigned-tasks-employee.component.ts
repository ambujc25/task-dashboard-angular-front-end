import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assigned-tasks-employee',
  templateUrl: './assigned-tasks-employee.component.html',
  styleUrls: ['./assigned-tasks-employee.component.css']
})
export class AssignedTasksEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private routeSub: Subscription;
  routeId: string;

  count: number = 3;
  //p: number = this.data.length/this.count;
  p:number = 1;

  dataHere = false;
  userData: {
    first_name: '',
    last_name: '',
    email: '',
    tasks_doing: [{
      title: '',
      _id: '',
    }],
  };

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params.id);
      this.routeId = params.id;
    })
    
    fetch('http://localhost:3000/worker/get/' + this.routeId,{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log(response);
      this.userData = response;
      this.dataHere = true;
    })
  }

}
