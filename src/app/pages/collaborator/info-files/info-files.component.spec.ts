import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFilesComponent } from './info-files.component';

describe('InfoFilesComponent', () => {
  let component: InfoFilesComponent;
  let fixture: ComponentFixture<InfoFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
