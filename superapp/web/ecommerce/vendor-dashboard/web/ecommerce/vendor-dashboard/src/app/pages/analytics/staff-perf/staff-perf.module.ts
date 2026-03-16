import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaffPerfComponent } from './staff-perf.component';

const routes: Routes = [
  { path: '', component: StaffPerfComponent }
];

@NgModule({
  declarations: [StaffPerfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffPerfModule { }
