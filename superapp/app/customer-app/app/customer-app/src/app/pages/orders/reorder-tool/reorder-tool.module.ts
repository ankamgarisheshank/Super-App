import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReorderToolComponent } from './reorder-tool.component';

const routes: Routes = [
  { path: '', component: ReorderToolComponent }
];

@NgModule({
  declarations: [ReorderToolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReorderToolModule { }
