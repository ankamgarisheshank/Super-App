import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGridEcomComponent } from './category-grid-ecom.component';

const routes: Routes = [
  { path: '', component: CategoryGridEcomComponent }
];

@NgModule({
  declarations: [CategoryGridEcomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryGridEcomModule { }
