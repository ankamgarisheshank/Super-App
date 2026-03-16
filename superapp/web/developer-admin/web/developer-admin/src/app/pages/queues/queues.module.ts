import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QueuesComponent } from './queues.component';

const routes: Routes = [
  { path: '', component: QueuesComponent }
];

@NgModule({
  declarations: [QueuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QueuesModule { }
