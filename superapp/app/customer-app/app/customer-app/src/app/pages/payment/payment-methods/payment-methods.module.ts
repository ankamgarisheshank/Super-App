import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentMethodsComponent } from './payment-methods.component';

const routes: Routes = [
  { path: '', component: PaymentMethodsComponent }
];

@NgModule({
  declarations: [PaymentMethodsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentMethodsModule { }
