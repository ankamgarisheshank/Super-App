import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultsStoresComponent } from './results-stores.component';

const routes: Routes = [
  { path: '', component: ResultsStoresComponent }
];

@NgModule({
  declarations: [ResultsStoresComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultsStoresModule { }
