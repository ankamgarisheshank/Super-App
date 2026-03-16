import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapComponent } from './heatmap.component';

const routes: Routes = [
  { path: '', component: HeatmapComponent }
];

@NgModule({
  declarations: [HeatmapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeatmapModule { }
