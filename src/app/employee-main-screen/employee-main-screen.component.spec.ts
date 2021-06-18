import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainScreenComponent } from './employee-main-screen.component';

describe('EmployeeMainScreenComponent', () => {
  let component: EmployeeMainScreenComponent;
  let fixture: ComponentFixture<EmployeeMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
