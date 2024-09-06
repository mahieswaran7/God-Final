import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelGridLeftComponent } from './hotel-grid-left.component';

const routes: Routes = [{ path: '', component: HotelGridLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelGridLeftRoutingModule { }
