import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReferEarnComponent } from './refer-earn.component';

const routes: Routes = [
  { path: '', component: ReferEarnComponent }
];

@NgModule({
  declarations: [ReferEarnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReferEarnModule { }
