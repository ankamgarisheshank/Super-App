import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompleteComponent } from './complete.component';

const routes: Routes = [
  { path: '', component: CompleteComponent }
];

@NgModule({
  declarations: [CompleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompleteModule { }
