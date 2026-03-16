import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGridQuickComponent } from './category-grid-quick.component';

const routes: Routes = [
  { path: '', component: CategoryGridQuickComponent }
];

@NgModule({
  declarations: [CategoryGridQuickComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryGridQuickModule { }
