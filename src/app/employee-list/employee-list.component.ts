import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeedata = [] as any;
  count: number = 3;

  constructor() { }

  @Input() data = [] as any;
  
  p: number = this.data.length/this.count;

  ngOnInit(): void {
    console.log(this.data);
  }

}
