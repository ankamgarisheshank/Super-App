import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuickOrdersComponent } from './quick-orders.component';

const routes: Routes = [
  { path: '', component: QuickOrdersComponent }
];

@NgModule({
  declarations: [QuickOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickOrdersModule { }
