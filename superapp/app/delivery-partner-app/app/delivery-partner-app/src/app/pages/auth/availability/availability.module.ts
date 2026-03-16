import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilityComponent } from './availability.component';

const routes: Routes = [
  { path: '', component: AvailabilityComponent }
];

@NgModule({
  declarations: [AvailabilityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AvailabilityModule { }
