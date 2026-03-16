import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CancelOrderComponent } from './cancel-order.component';

const routes: Routes = [
  { path: '', component: CancelOrderComponent }
];

@NgModule({
  declarations: [CancelOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CancelOrderModule { }
