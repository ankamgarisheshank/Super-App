import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortModalComponent } from './sort-modal.component';

const routes: Routes = [
  { path: '', component: SortModalComponent }
];

@NgModule({
  declarations: [SortModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SortModalModule { }
