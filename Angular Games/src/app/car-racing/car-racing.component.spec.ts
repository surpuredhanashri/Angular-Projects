import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRacingComponent } from './car-racing.component';

describe('CarRacingComponent', () => {
  let component: CarRacingComponent;
  let fixture: ComponentFixture<CarRacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
