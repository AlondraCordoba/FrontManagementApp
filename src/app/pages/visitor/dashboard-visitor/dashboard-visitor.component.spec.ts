import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisitorComponent } from './dashboard-visitor.component';

describe('DashboardVisitorComponent', () => {
  let component: DashboardVisitorComponent;
  let fixture: ComponentFixture<DashboardVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
