import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVisitComponent } from './sidebar-visit.component';

describe('SidebarVisitComponent', () => {
  let component: SidebarVisitComponent;
  let fixture: ComponentFixture<SidebarVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
