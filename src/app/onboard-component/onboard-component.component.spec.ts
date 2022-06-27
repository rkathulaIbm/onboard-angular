import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardComponentComponent } from './onboard-component.component';

describe('OnboardComponentComponent', () => {
  let component: OnboardComponentComponent;
  let fixture: ComponentFixture<OnboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
