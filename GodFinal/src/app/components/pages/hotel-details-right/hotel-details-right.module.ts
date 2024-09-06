import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelDetailsRightRoutingModule } from './hotel-details-right-routing.module';
import { HotelDetailsRightComponent } from './hotel-details-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelDetailsRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelDetailsRightRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HotelDetailsRightModule { }
