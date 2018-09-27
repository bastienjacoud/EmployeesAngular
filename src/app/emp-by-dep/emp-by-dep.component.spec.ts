import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpByDepComponent } from './emp-by-dep.component';

describe('EmpByDepComponent', () => {
  let component: EmpByDepComponent;
  let fixture: ComponentFixture<EmpByDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpByDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpByDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
