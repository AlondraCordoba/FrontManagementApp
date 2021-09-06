import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollaboratorComponent } from './home-collaborator.component';

describe('HomeCollaboratorComponent', () => {
  let component: HomeCollaboratorComponent;
  let fixture: ComponentFixture<HomeCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
