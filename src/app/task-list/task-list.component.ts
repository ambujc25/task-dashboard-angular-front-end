import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

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
