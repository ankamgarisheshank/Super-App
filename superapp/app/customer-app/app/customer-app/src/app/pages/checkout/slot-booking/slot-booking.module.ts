import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SlotBookingComponent } from './slot-booking.component';

const routes: Routes = [
  { path: '', component: SlotBookingComponent }
];

@NgModule({
  declarations: [SlotBookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SlotBookingModule { }
