import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DarkStoresComponent } from './dark-stores.component';

const routes: Routes = [
  { path: '', component: DarkStoresComponent }
];

@NgModule({
  declarations: [DarkStoresComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DarkStoresModule { }
