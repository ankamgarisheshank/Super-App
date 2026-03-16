import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PoListComponent } from './po-list.component';

const routes: Routes = [
  { path: '', component: PoListComponent }
];

@NgModule({
  declarations: [PoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoListModule { }
