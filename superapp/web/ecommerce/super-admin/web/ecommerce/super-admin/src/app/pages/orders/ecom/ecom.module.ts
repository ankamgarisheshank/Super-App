import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcomComponent } from './ecom.component';

const routes: Routes = [
  { path: '', component: EcomComponent }
];

@NgModule({
  declarations: [EcomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EcomModule { }
