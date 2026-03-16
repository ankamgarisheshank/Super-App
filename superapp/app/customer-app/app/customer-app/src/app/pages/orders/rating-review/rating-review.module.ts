import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RatingReviewComponent } from './rating-review.component';

const routes: Routes = [
  { path: '', component: RatingReviewComponent }
];

@NgModule({
  declarations: [RatingReviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RatingReviewModule { }
