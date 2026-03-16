import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutSummaryComponent } from './logout-summary.component';

const routes: Routes = [
  { path: '', component: LogoutSummaryComponent }
];

@NgModule({
  declarations: [LogoutSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LogoutSummaryModule { }
