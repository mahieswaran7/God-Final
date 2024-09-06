import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { HotelGridRightRoutingModule } from './hotel-grid-right-routing.module';
import { HotelGridRightComponent } from './hotel-grid-right.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelGridRightComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelGridRightRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule,
    NgxPaginationModule
  ]
})
export class HotelGridRightModule { }
