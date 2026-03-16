import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EarningsComponent } from './earnings.component';

const routes: Routes = [
  { path: '', component: EarningsComponent }
];

@NgModule({
  declarations: [EarningsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EarningsModule { }
