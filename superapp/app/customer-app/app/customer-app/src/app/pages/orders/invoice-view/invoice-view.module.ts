import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceViewComponent } from './invoice-view.component';

const routes: Routes = [
  { path: '', component: InvoiceViewComponent }
];

@NgModule({
  declarations: [InvoiceViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoiceViewModule { }
