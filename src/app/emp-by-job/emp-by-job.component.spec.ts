import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpByJobComponent } from './emp-by-job.component';

describe('EmpByJobComponent', () => {
  let component: EmpByJobComponent;
  let fixture: ComponentFixture<EmpByJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpByJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpByJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
