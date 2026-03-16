import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecentlyViewedComponent } from './recently-viewed.component';

const routes: Routes = [
  { path: '', component: RecentlyViewedComponent }
];

@NgModule({
  declarations: [RecentlyViewedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecentlyViewedModule { }
