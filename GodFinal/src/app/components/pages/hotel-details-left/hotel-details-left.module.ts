import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelDetailsLeftRoutingModule } from './hotel-details-left-routing.module';
import { HotelDetailsLeftComponent } from './hotel-details-left.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelDetailsLeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelDetailsLeftRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelDetailsLeftModule { }
