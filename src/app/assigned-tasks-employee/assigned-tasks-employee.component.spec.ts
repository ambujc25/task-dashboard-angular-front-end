import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTasksEmployeeComponent } from './assigned-tasks-employee.component';

describe('AssignedTasksEmployeeComponent', () => {
  let component: AssignedTasksEmployeeComponent;
  let fixture: ComponentFixture<AssignedTasksEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTasksEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTasksEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
