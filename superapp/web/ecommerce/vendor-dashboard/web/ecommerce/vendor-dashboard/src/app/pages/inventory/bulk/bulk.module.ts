import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BulkComponent } from './bulk.component';

const routes: Routes = [
  { path: '', component: BulkComponent }
];

@NgModule({
  declarations: [BulkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BulkModule { }
