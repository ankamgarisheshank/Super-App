import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FraudComponent } from './fraud.component';

const routes: Routes = [
  { path: '', component: FraudComponent }
];

@NgModule({
  declarations: [FraudComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FraudModule { }
