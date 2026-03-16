import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultsProductsComponent } from './results-products.component';

const routes: Routes = [
  { path: '', component: ResultsProductsComponent }
];

@NgModule({
  declarations: [ResultsProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultsProductsModule { }
