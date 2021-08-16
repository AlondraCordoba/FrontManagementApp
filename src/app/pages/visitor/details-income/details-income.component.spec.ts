import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIncomeComponent } from './details-income.component';

describe('DetailsIncomeComponent', () => {
  let component: DetailsIncomeComponent;
  let fixture: ComponentFixture<DetailsIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
