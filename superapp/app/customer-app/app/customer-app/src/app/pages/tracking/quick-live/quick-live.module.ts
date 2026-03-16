import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuickLiveComponent } from './quick-live.component';

const routes: Routes = [
  { path: '', component: QuickLiveComponent }
];

@NgModule({
  declarations: [QuickLiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuickLiveModule { }
