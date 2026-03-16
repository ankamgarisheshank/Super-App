import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuickFullComponent } from './quick-full.component';

const routes: Routes = [
  { path: '', component: QuickFullComponent }
];

@NgModule({
  declarations: [QuickFullComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickFullModule { }
