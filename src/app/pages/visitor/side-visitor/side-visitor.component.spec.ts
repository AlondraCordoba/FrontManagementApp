import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideVisitorComponent } from './side-visitor.component';

describe('SideVisitorComponent', () => {
  let component: SideVisitorComponent;
  let fixture: ComponentFixture<SideVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
