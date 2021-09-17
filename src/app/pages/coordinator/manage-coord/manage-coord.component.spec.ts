import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCoordComponent } from './manage-coord.component';

describe('ManageCoordComponent', () => {
  let component: ManageCoordComponent;
  let fixture: ComponentFixture<ManageCoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCoordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
