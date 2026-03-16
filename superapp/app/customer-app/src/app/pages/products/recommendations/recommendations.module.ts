import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './recommendations.component';

const routes: Routes = [
  { path: '', component: RecommendationsComponent }
];

@NgModule({
  declarations: [RecommendationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecommendationsModule { }
