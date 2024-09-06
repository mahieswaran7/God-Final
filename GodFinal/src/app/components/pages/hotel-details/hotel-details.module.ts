import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { HotelDetailsComponent } from './hotel-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelDetailsModule { }
