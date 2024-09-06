import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGridRightComponent } from './hotel-grid-right.component';

describe('HotelGridRightComponent', () => {
  let component: HotelGridRightComponent;
  let fixture: ComponentFixture<HotelGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
