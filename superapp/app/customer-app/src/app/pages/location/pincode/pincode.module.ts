import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PincodeComponent } from './pincode.component';

const routes: Routes = [
  { path: '', component: PincodeComponent }
];

@NgModule({
  declarations: [PincodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PincodeModule { }
