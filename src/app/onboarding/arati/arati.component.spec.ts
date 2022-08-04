import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AratiComponent } from './arati.component';

describe('AratiComponent', () => {
  let component: AratiComponent;
  let fixture: ComponentFixture<AratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AratiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
