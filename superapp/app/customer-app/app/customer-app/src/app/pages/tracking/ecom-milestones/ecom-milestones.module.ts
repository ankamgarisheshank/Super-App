import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcomMilestonesComponent } from './ecom-milestones.component';

const routes: Routes = [
  { path: '', component: EcomMilestonesComponent }
];

@NgModule({
  declarations: [EcomMilestonesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EcomMilestonesModule { }
