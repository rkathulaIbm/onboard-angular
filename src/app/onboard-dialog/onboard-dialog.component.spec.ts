import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardDialogComponent } from './onboard-dialog.component';

describe('OnboardDialogComponent', () => {
  let component: OnboardDialogComponent;
  let fixture: ComponentFixture<OnboardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
