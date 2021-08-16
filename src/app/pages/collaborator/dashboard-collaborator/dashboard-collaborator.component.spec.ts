import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCollaboratorComponent } from './dashboard-collaborator.component';

describe('DashboardCollaboratorComponent', () => {
  let component: DashboardCollaboratorComponent;
  let fixture: ComponentFixture<DashboardCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
