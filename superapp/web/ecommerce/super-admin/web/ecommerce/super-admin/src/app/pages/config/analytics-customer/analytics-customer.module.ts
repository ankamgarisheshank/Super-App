import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsCustomerComponent } from './analytics-customer.component';

const routes: Routes = [
  { path: '', component: AnalyticsCustomerComponent }
];

@NgModule({
  declarations: [AnalyticsCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsCustomerModule { }
