import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationCustomerComponent } from './navigation-customer.component';

const routes: Routes = [
  { path: '', component: NavigationCustomerComponent }
];

@NgModule({
  declarations: [NavigationCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavigationCustomerModule { }
