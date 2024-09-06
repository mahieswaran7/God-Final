import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsRightComponent } from './hotel-details-right.component';

const routes: Routes = [{ path: '', component: HotelDetailsRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelDetailsRightRoutingModule { }
