import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from './batch.component';

const routes: Routes = [
  { path: '', component: BatchComponent }
];

@NgModule({
  declarations: [BatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BatchModule { }
