import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsRightComponent } from './hotel-details-right.component';

describe('HotelDetailsRightComponent', () => {
  let component: HotelDetailsRightComponent;
  let fixture: ComponentFixture<HotelDetailsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
