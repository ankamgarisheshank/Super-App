import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PackingComponent } from './packing.component';

const routes: Routes = [
  { path: '', component: PackingComponent }
];

@NgModule({
  declarations: [PackingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PackingModule { }
