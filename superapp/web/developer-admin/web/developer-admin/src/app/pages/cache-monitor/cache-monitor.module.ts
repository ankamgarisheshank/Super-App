import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CacheMonitorComponent } from './cache-monitor.component';

const routes: Routes = [
  { path: '', component: CacheMonitorComponent }
];

@NgModule({
  declarations: [CacheMonitorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CacheMonitorModule { }
