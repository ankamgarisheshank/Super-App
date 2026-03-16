import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PickingComponent } from './picking.component';

const routes: Routes = [
  { path: '', component: PickingComponent }
];

@NgModule({
  declarations: [PickingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PickingModule { }
