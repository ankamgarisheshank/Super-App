import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PoDetailComponent } from './po-detail.component';

const routes: Routes = [
  { path: '', component: PoDetailComponent }
];

@NgModule({
  declarations: [PoDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoDetailModule { }
