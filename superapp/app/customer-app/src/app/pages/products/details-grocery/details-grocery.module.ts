import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGroceryComponent } from './details-grocery.component';

const routes: Routes = [
  { path: '', component: DetailsGroceryComponent }
];

@NgModule({
  declarations: [DetailsGroceryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsGroceryModule { }
