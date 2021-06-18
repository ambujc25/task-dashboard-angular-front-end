import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-employee',
  templateUrl: './task-list-employee.component.html',
  styleUrls: ['./task-list-employee.component.css']
})
export class TaskListEmployeeComponent implements OnInit {

  public employeedata = [] as any;
  count: number = 3;

  constructor() { }

  @Input() data = [] as any;
  
  p: number = this.data.length/this.count;

  ngOnInit(): void {
    console.log(this.data);
  }

  openWorker(){

  }

}
