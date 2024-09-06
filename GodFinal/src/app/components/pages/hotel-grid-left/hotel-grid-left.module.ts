import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { HotelGridLeftRoutingModule } from './hotel-grid-left-routing.module';
import { HotelGridLeftComponent } from './hotel-grid-left.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelGridLeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelGridLeftRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule,
    NgxPaginationModule
  ]
})
export class HotelGridLeftModule { }
