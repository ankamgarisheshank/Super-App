import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsOpsComponent } from './analytics-ops.component';

const routes: Routes = [
  { path: '', component: AnalyticsOpsComponent }
];

@NgModule({
  declarations: [AnalyticsOpsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsOpsModule { }
