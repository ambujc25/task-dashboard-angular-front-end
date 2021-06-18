import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsEmployeeComponent } from './employee-details-employee.component';

describe('EmployeeDetailsEmployeeComponent', () => {
  let component: EmployeeDetailsEmployeeComponent;
  let fixture: ComponentFixture<EmployeeDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
