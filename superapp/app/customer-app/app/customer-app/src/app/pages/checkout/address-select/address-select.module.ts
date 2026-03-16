import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddressSelectComponent } from './address-select.component';

const routes: Routes = [
  { path: '', component: AddressSelectComponent }
];

@NgModule({
  declarations: [AddressSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddressSelectModule { }
