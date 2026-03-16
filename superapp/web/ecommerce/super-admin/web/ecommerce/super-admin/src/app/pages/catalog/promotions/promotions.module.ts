import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './promotions.component';

const routes: Routes = [
  { path: '', component: PromotionsComponent }
];

@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PromotionsModule { }
