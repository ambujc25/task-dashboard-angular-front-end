import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Subscription } from 'rxjs';

import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-employee-details-employee',
  templateUrl: './employee-details-employee.component.html',
  styleUrls: ['./employee-details-employee.component.css']
})
export class EmployeeDetailsEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private routeSub: Subscription;
  routeId: string;

  count: number = 3;
  //p: number = this.data.length/this.count;
  p:number = 1;

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
