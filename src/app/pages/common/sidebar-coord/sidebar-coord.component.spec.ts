import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCoordComponent } from './sidebar-coord.component';

describe('SidebarCoordComponent', () => {
  let component: SidebarCoordComponent;
  let fixture: ComponentFixture<SidebarCoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCoordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
