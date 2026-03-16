import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoyaltyPointsComponent } from './loyalty-points.component';

const routes: Routes = [
  { path: '', component: LoyaltyPointsComponent }
];

@NgModule({
  declarations: [LoyaltyPointsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoyaltyPointsModule { }
