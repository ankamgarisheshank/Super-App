import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SafetyComponent } from './safety.component';

const routes: Routes = [
  { path: '', component: SafetyComponent }
];

@NgModule({
  declarations: [SafetyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SafetyModule { }
