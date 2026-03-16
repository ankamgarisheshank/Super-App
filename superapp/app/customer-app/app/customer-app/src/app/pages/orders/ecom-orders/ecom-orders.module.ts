import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcomOrdersComponent } from './ecom-orders.component';

const routes: Routes = [
  { path: '', component: EcomOrdersComponent }
];

@NgModule({
  declarations: [EcomOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EcomOrdersModule { }
