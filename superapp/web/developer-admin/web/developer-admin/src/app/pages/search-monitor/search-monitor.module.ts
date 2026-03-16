import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchMonitorComponent } from './search-monitor.component';

const routes: Routes = [
  { path: '', component: SearchMonitorComponent }
];

@NgModule({
  declarations: [SearchMonitorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchMonitorModule { }
