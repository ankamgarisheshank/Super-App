import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlternativesComponent } from './alternatives.component';

const routes: Routes = [
  { path: '', component: AlternativesComponent }
];

@NgModule({
  declarations: [AlternativesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlternativesModule { }
