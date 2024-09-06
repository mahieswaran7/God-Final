import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NiceSelectModule } from 'ng-nice-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { HotelSidebarComponent } from './hotel-sidebar/hotel-sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PartnersComponent,
    BlogSidebarComponent,
    HotelSidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    NgxSliderModule,
    NiceSelectModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PartnersComponent,
    BlogSidebarComponent,
    HotelSidebarComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
