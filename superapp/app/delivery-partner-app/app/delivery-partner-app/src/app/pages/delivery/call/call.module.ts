import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call.component';

const routes: Routes = [
  { path: '', component: CallComponent }
];

@NgModule({
  declarations: [CallComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CallModule { }
