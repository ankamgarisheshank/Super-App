import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcomFullComponent } from './ecom-full.component';

const routes: Routes = [
  { path: '', component: EcomFullComponent }
];

@NgModule({
  declarations: [EcomFullComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EcomFullModule { }
