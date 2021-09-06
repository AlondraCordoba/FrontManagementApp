import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCollabComponent } from './reports-collab.component';

describe('ReportsCollabComponent', () => {
  let component: ReportsCollabComponent;
  let fixture: ComponentFixture<ReportsCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsCollabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
