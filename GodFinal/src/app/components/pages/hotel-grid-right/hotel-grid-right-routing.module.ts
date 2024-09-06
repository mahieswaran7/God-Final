import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelGridRightComponent } from './hotel-grid-right.component';

const routes: Routes = [{ path: '', component: HotelGridRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelGridRightRoutingModule { }
