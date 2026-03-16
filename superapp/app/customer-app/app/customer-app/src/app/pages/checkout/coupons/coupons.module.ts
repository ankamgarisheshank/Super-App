import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons.component';

const routes: Routes = [
  { path: '', component: CouponsComponent }
];

@NgModule({
  declarations: [CouponsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CouponsModule { }
