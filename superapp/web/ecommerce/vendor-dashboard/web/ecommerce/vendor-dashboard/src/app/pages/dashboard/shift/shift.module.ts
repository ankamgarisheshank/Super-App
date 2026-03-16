import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShiftComponent } from './shift.component';

const routes: Routes = [
  { path: '', component: ShiftComponent }
];

@NgModule({
  declarations: [ShiftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShiftModule { }
