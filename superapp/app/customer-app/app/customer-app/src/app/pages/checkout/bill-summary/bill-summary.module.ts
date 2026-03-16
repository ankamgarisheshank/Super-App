import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillSummaryComponent } from './bill-summary.component';

const routes: Routes = [
  { path: '', component: BillSummaryComponent }
];

@NgModule({
  declarations: [BillSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BillSummaryModule { }
