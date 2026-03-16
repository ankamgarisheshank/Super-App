import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HandoverComponent } from './handover.component';

const routes: Routes = [
  { path: '', component: HandoverComponent }
];

@NgModule({
  declarations: [HandoverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HandoverModule { }
