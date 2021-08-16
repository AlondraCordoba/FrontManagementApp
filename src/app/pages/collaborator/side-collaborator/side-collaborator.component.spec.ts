import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCollaboratorComponent } from './side-collaborator.component';

describe('SideCollaboratorComponent', () => {
  let component: SideCollaboratorComponent;
  let fixture: ComponentFixture<SideCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
