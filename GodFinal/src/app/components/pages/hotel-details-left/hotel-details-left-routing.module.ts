import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsLeftComponent } from './hotel-details-left.component';

const routes: Routes = [{ path: '', component: HotelDetailsLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelDetailsLeftRoutingModule { }
