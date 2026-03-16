import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RefundStatusComponent } from './refund-status.component';

const routes: Routes = [
  { path: '', component: RefundStatusComponent }
];

@NgModule({
  declarations: [RefundStatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RefundStatusModule { }
