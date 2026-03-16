import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandEcomComponent } from './brand-ecom.component';

const routes: Routes = [
  { path: '', component: BrandEcomComponent }
];

@NgModule({
  declarations: [BrandEcomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BrandEcomModule { }
