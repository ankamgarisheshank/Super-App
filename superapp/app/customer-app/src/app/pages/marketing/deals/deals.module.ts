import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals.component';

const routes: Routes = [
  { path: '', component: DealsComponent }
];

@NgModule({
  declarations: [DealsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DealsModule { }
