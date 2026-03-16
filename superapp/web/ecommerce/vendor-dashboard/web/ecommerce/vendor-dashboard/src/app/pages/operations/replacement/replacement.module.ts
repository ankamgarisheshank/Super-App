import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReplacementComponent } from './replacement.component';

const routes: Routes = [
  { path: '', component: ReplacementComponent }
];

@NgModule({
  declarations: [ReplacementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReplacementModule { }
