import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NiceSelectModule } from 'ng-nice-select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CategoryComponent } from './category/category.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BookingFormComponent,
    AboutUsComponent,
    HotelsComponent,
    CategoryComponent,
    ServicesComponent,
    TeamComponent,
    WhyUsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NiceSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
