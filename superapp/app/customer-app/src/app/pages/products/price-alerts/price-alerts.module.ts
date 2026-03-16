import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PriceAlertsComponent } from './price-alerts.component';

const routes: Routes = [
  { path: '', component: PriceAlertsComponent }
];

@NgModule({
  declarations: [PriceAlertsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PriceAlertsModule { }
