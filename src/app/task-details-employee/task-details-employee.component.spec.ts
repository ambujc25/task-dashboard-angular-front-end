import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsEmployeeComponent } from './task-details-employee.component';

describe('TaskDetailsEmployeeComponent', () => {
  let component: TaskDetailsEmployeeComponent;
  let fixture: ComponentFixture<TaskDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
