import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGridLeftComponent } from './hotel-grid-left.component';

describe('HotelGridLeftComponent', () => {
  let component: HotelGridLeftComponent;
  let fixture: ComponentFixture<HotelGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
