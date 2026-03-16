import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuickMiniComponent } from './quick-mini.component';

const routes: Routes = [
  { path: '', component: QuickMiniComponent }
];

@NgModule({
  declarations: [QuickMiniComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickMiniModule { }
