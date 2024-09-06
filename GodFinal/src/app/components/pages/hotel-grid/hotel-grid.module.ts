import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectModule } from 'ng-nice-select';
import { NgxPaginationModule } from 'ngx-pagination';

import { HotelGridRoutingModule } from './hotel-grid-routing.module';
import { HotelGridComponent } from './hotel-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HotelGridComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    HotelGridRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NiceSelectModule,
    NgxPaginationModule
  ]
})
export class HotelGridModule { }
