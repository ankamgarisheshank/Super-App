import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcomTabComponent } from './ecom-tab.component';

const routes: Routes = [
  { path: '', component: EcomTabComponent }
];

@NgModule({
  declarations: [EcomTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EcomTabModule { }
