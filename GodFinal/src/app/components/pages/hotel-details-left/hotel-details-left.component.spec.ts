import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsLeftComponent } from './hotel-details-left.component';

describe('HotelDetailsLeftComponent', () => {
  let component: HotelDetailsLeftComponent;
  let fixture: ComponentFixture<HotelDetailsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
