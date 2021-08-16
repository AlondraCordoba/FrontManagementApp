import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsVisitorComponent } from './reports-visitor.component';

describe('ReportsVisitorComponent', () => {
  let component: ReportsVisitorComponent;
  let fixture: ComponentFixture<ReportsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
