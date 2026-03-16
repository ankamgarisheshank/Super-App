import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFmcgComponent } from './details-fmcg.component';

const routes: Routes = [
  { path: '', component: DetailsFmcgComponent }
];

@NgModule({
  declarations: [DetailsFmcgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsFmcgModule { }
