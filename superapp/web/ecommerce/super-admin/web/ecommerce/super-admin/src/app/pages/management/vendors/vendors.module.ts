import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors.component';

const routes: Routes = [
  { path: '', component: VendorsComponent }
];

@NgModule({
  declarations: [VendorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VendorsModule { }
