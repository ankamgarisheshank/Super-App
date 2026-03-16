import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProofComponent } from './proof.component';

const routes: Routes = [
  { path: '', component: ProofComponent }
];

@NgModule({
  declarations: [ProofComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProofModule { }
