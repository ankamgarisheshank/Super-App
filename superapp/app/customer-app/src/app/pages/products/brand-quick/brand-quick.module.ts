import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrandQuickComponent } from './brand-quick.component';

const routes: Routes = [
  { path: '', component: BrandQuickComponent }
];

@NgModule({
  declarations: [BrandQuickComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BrandQuickModule { }
