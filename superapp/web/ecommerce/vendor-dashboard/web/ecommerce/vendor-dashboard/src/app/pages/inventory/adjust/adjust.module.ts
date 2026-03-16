import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdjustComponent } from './adjust.component';

const routes: Routes = [
  { path: '', component: AdjustComponent }
];

@NgModule({
  declarations: [AdjustComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdjustModule { }
